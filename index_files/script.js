const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const revealTargets = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach((el) => observer.observe(el));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});



function resizeLivePreviews() {
  const baseWidth = 1280;
  document.querySelectorAll(".preview-canvas").forEach((canvas) => {
    const iframe = canvas.querySelector("iframe");
    if (!iframe) return;

    const width = canvas.clientWidth || canvas.getBoundingClientRect().width;
    if (!width) return;

    const scale = width / baseWidth;

    // Keep the thumbnail readable on mobile, without becoming too tall on desktop.
    const height = Math.max(225, Math.min(330, width * 0.64));

    const rawOffset = Number(canvas.dataset.previewOffset || 0);
    const mobileOffset = window.innerWidth <= 640 ? rawOffset * 0.55 : rawOffset;

    canvas.style.setProperty("--preview-scale", String(scale));
    canvas.style.setProperty("--preview-height", `${height}px`);
    canvas.style.setProperty("--preview-offset", `${mobileOffset}px`);
  });
}

resizeLivePreviews();

window.addEventListener("resize", resizeLivePreviews);

if ("ResizeObserver" in window) {
  const previewObserver = new ResizeObserver(resizeLivePreviews);
  document.querySelectorAll(".preview-canvas").forEach((canvas) => previewObserver.observe(canvas));
}
