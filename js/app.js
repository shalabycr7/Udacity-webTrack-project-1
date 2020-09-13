// Define Global Variables
const navUl = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
let n = 0;
let dtNavValue = "";
let nv = document.querySelector(".navbar__menu");
const bu = document.querySelector("#nav-drawer");
const topButton = document.getElementById("top-bu");
// Helper functions
function removeClass(element, className) {
  for (let i = 0; i < element.length; i++) {
    element[i].classList.remove(className);
  }
}
// build the nav
let frag = document.createDocumentFragment();
for (let sec of sections) {
  dtNavValue += ` ${sec.getAttribute("data-nav")}`;
  let createdLiElements = document.createElement("li");
  let link = document.createElement("a");
  link.classList.add("menu__link");
  createdLiElements.appendChild(link);
  frag.appendChild(createdLiElements);
}
navUl.appendChild(frag);
let dtNavArray = dtNavValue.split(" ");
let navLinks = document.querySelectorAll(" nav li a");
for (let navLink of navLinks) {
  navLink.textContent = dtNavArray[n + 1];

  // Add anchor link's href attribute
  navLink.href = "#" + dtNavArray[n + 1];
  navLink.addEventListener("click", function () {
    let div = document.getElementById(`${this.textContent}`);

    // Set/Remove active sections
    removeClass(sections, "your-active-class");
    div.classList.add("your-active-class");

    /* -close navigation menu after clicking a section-- */
    ShowSideNav();
  });
  n++;
}
// Show Navigation Menu
let ShowSideNav = () => {
  if (nv.style.display == "block") {
    bu.style.top = "10px";
    nv.style.display = "none";
    bu.style.transform = "rotate(0deg)";
    bu.style.opacity = "0.95";
  } else {
    nv.style.display = "block";
    bu.style.top = `${nv.clientHeight + 10}px`;
    bu.style.transform = "rotate(90deg)";
    bu.style.opacity = "0.85";
  }
};
bu.addEventListener("click", ShowSideNav);

/* -- Add go-to top button at the end of the page -- */
window.onscroll = () => {
  topButton.style.opacity = 0;
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
    //the bottom of the page
    topButton.style.opacity = 1;
    /*--Scroll to top page using scrollTO event--*/
    topButton.addEventListener("click", () => {
      scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  }
};
/* --Add an active state to sections when scrolling-- */
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach((entry) => {
      // Checking if intersecting or not
      if (!entry.isIntersecting) {
        return;
      }
      removeClass(sections, "your-active-class");
      entry.target.classList.add("your-active-class");
      /* --Add an active state to links depending on the section visible in the viewport-- */
      let viewedSecLink = document.querySelector(
        `[href="#${entry.target.id}"]`
      );
      const allLinks = document.querySelectorAll("li a");
      removeClass(allLinks, "activeS");
      viewedSecLink.classList.add("activeS");
    });
    /* --Using a threshold for the section portion  displayed in the viewport-- */
  },
  { threshold: [0.5] }
);
sections.forEach((sections) => {
  observer.observe(sections);
});
