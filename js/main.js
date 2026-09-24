// Riya Kumari — Portfolio interactions

// Typing effect for hero roles
const roles = [
  "Software Engineer (Fresher)",
  "Full Stack Developer",
  "REST API Designer",
  "SQL & Database Enthusiast",
  "Node.js / Python Developer",
];
const typedEl = document.getElementById("typed");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = roles[roleIndex];
  if (deleting) {
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  } else {
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
    }
  }
  typedEl.textContent = current.slice(0, charIndex);
  setTimeout(type, deleting ? 45 : 95);
}
type();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  })
);

// Scroll reveal
const revealables = document.querySelectorAll(".card, .section-head");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealables.forEach((el) => {
  if (!el.classList.contains("visible")) el.classList.add("reveal");
  observer.observe(el);
});