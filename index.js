!(function () {
  /*
   * NAVIGATION LINKS
   */
  const navLinks = document.querySelectorAll("nav > ul > li");
  navLinks.forEach((link) => {
    link.addEventListener("click", ({ target }) => {
      const id = target.text.toLowerCase();
      scrollToElement(id);
    });
  });

  function scrollToElement(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  }

  const intersectionObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  function navIntersectionObserverCallback(entries) {
    entries.forEach(({ isIntersecting, target }) => {
      const id = `nav-${target.id.toLowerCase()}`;
      const navItem = document.getElementById(id);

      if (isIntersecting) {
        navItem.classList.add("active");
      } else {
        navItem.classList.remove("active");
      }
    });
  }

  const navObserver = new IntersectionObserver(navIntersectionObserverCallback, intersectionObserverOptions);
  document.querySelectorAll("section").forEach((section) => {
    navObserver.observe(section);
  });

  function skillsIntersectionObserverCallback(entries) {
    const progressBars = document.querySelectorAll(".progress-bar");
    entries.forEach(({ isIntersecting }) => {
      if (isIntersecting) {
        progressBars.forEach((progressBar) => {
          const widthPercent = parseInt(progressBar.getAttribute("aria-valuenow")) * 10;
          progressBar.style.width = `${widthPercent}%`;
        });
      } else {
        progressBars.forEach((progressBar) => {
          progressBar.style.width = "0";
        });
      }
    });
  }

  const skillsObserver = new IntersectionObserver(skillsIntersectionObserverCallback, intersectionObserverOptions);
  skillsObserver.observe(document.getElementById("skills"));
})();
