!(function () {
  const navLinks = document.querySelectorAll("nav > ul > li");
  navLinks.forEach((link) => {
    link.addEventListener("click", ({ target }) => {
      const id = target.text.toLowerCase();
      setNavLinkAsActive(navLinks, target);
      scrollToElement(id);
    });
  });

  function setNavLinkAsActive(navLinks, link) {
    navLinks.forEach((l) => {
      l.classList.remove("active");
      link.parentElement.classList.add("active");
    });
  }

  function scrollToElement(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
})();
