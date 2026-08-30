const slides = [
  {
    image: "cacao-plantation.webp",
    alt: "Cacao y cultivos tropicales",
    kicker: "Cacao y cultivos tropicales",
    title: "Nutrición orgánica para cultivos más fuertes desde la raíz",
    text: "Bactribiol acompaña al productor con una solución para suelo y follaje, pensada para mejorar la vida del suelo y la respuesta del cultivo.",
  },
  {
    image: "cacao-advisory.webp",
    alt: "Asesoría en campo",
    kicker: "Asesoría en campo",
    title: "Acompañamiento técnico para aplicar mejor y producir con confianza",
    text: "Trabajamos con productores, distribuidores y técnicos agrícolas para recomendar dosis, frecuencia y manejo según cada cultivo.",
  },
  {
    image: "soil-roots.webp",
    alt: "Rizosfera activa",
    kicker: "Rizosfera activa",
    title: "Microorganismos, materia orgánica y minerales al servicio del suelo",
    text: "La fórmula combina microorganismos benéficos, ácidos húmicos y fúlvicos, aminoácidos, extractos vegetales y humus de lombriz.",
  },
];

const heroTrack = document.querySelector("[data-hero-track]");
const dots = Array.from(document.querySelectorAll(".slider-dots span"));
const nextButton = document.querySelector("[data-next]");
const prevButton = document.querySelector("[data-prev]");
let activeSlide = 0;
let timer;

slides.forEach((slide) => {
  const image = new Image();
  image.src = slide.image;
});

function renderSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  heroTrack.style.transform = `translateX(-${activeSlide * 100}%)`;
  dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === activeSlide));
}

function startSlider() {
  window.clearInterval(timer);
  timer = window.setInterval(() => renderSlide(activeSlide + 1), 6200);
}

nextButton.addEventListener("click", () => {
  renderSlide(activeSlide + 1);
  startSlider();
});

prevButton.addEventListener("click", () => {
  renderSlide(activeSlide - 1);
  startSlider();
});

startSlider();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
