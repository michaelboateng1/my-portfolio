const sections = document.querySelectorAll(".section");
const sectionBtnsContainer = document.querySelector(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

const pageTransitions = () => {
  for (let i = 0; i < sectionBtn.length; i++) {
    sectionBtn[i].addEventListener("click", (e) => {
      let currentActiveBtn = document.querySelector(".active-btn");
      currentActiveBtn.classList.remove("active-btn");

      e.target.classList.add("active-btn");
    });
  }

  allSections.addEventListener("click", (e) => {
    let pageId = e.target.dataset.id;
    if (pageId) {
      sectionBtn.forEach((btn) => btn.classList.remove("animate-btn"));
      e.target.classList.add("animate-btn");

      sections.forEach((section) => section.classList.remove("active"));
      const activePage = document.getElementById(pageId);
      activePage.classList.add("active");
    }
  });

  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
};

pageTransitions();
