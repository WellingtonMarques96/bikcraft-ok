function initScrollToSection() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollToSection();

function initScrollAnimacao() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animarScroll() {
      sections.forEach((i) => {
        const itemTop = i.getBoundingClientRect().top;
        const isSectionVisible = itemTop - windowMetade < 0;
        if (isSectionVisible) i.classList.add("ativo");
        else i.classList.remove("ativo");
      });
    }
    animarScroll();

    window.addEventListener("scroll", animarScroll);
  }
}
initScrollAnimacao();
