const menuButton = document.querySelector("[data-menu-button]");
const navigation = document.querySelector("[data-nav]");

menuButton?.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.querySelector("i")?.classList.toggle("fa-bars", !isOpen);
  menuButton.querySelector("i")?.classList.toggle("fa-xmark", isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.querySelector("i")?.classList.add("fa-bars");
    menuButton?.querySelector("i")?.classList.remove("fa-xmark");
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px" }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}
