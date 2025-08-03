/*Navigation bar Javascript*/
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('.sub-navigation');


openMenu.addEventListener('click', () => {
  nav.classList.add('menu');
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  nav.classList.remove('menu');
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
});


/*Animation Javascript*/
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.6
  });

  // --- JOURNEY SECTION ---
  const journey = document.querySelector("#Tour");
  if (journey) {
    const top = journey.querySelector(".top-details");
    const cards = journey.querySelectorAll(".journey-card-container");

    if (top) observer.observe(top);
    cards.forEach(card => observer.observe(card));
  }

  // --- PACKAGE SECTION ---
  const packageSection = document.querySelector("#Package");
  if (packageSection) {
    const showcase = packageSection.querySelector(".showcase-img");
    const text = packageSection.querySelector(".package-text");
    const bgPlace = packageSection.querySelector(".bg-place");

    if (showcase) observer.observe(showcase);
    if (text) observer.observe(text);
    if (bgPlace) observer.observe(bgPlace);
  }

  // --- EXPERIENCE SECTION ---
  const numbers = document.querySelectorAll(".numbers");
  numbers.forEach(num => observer.observe(num));

  // --- DISCOVER SECTION ---
  const discover = document.querySelector(".discover");
  if (discover) {
    const top = discover.querySelector(".discover-top-details");
    const boxes = discover.querySelectorAll(".discover-box");

    if (top) observer.observe(top);
    boxes.forEach(box => observer.observe(box));
  }

  // --- CLIENTS SECTION ---
  const clients = document.querySelector(".clients-section");
  if (clients) {
    const details = clients.querySelector(".clients-top-details");
    const sections = clients.querySelectorAll(".scroll-section");

    if (details) observer.observe(details);
    sections.forEach(sec => observer.observe(sec));
  }

  // --- FOOTER SECTION ---
  const contactBoxes = document.querySelectorAll(".contact-box");
  contactBoxes.forEach(box => observer.observe(box));

  // --- DESTINATION SECTION ---
  const destination = document.querySelector(".destination-section");
  if (destination) {
    const details = destination.querySelector(".destination-details");
    const imgs = destination.querySelectorAll(".destination-img");
    const locations = destination.querySelectorAll(".destination-location");

    if (details) observer.observe(details);
    imgs.forEach(img => observer.observe(img));
    locations.forEach(location => observer.observe(location));
  }
});