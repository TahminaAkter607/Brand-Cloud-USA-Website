const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const form = document.querySelector(".contact-form");
const toast = document.querySelector(".toast");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2800);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    showToast("Consultation request captured. Connect this form to your backend next.");
  });
}
