const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
if (menuToggle) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
}
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent("Anfrage über KREATON Website");
  const body = encodeURIComponent(
    `Name: ${data.get("name")}\nKontakt: ${data.get("contact")}\n\nAnfrage:\n${data.get("message")}`
  );
  window.location.href = `mailto:info@kreaton-haus-garten.de?subject=${subject}&body=${body}`;
  formMessage.textContent = "Ihre E-Mail-Anfrage wird vorbereitet.";
});
