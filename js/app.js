// Define Global Variables
let navUl = document.getElementById("navbar__list");

let sections = document.getElementsByTagName("section");

let n = 0;

let dtNavValue = "";
let nv = document.querySelector(".navbar__menu");
let bu = document.querySelector("#nav-drawer");

// build the nav
for (let sec of sections) {
  dtNavValue += ` ${sec.getAttribute("data-nav")}`;

  let createdLiElements = document.createElement("li");

  let link = document.createElement("a");

  link.classList.add("menu__link");

  createdLiElements.appendChild(link);

  navUl.appendChild(createdLiElements);
}

let dtNavArray = dtNavValue.split(" ");

let navLinks = document.querySelectorAll(" nav li a");

for (var navLink of navLinks) {
  navLink.textContent = dtNavArray[n + 1];

  // Scroll to section on link click

  navLink.href = "#" + dtNavArray[n + 1];
  navLink.addEventListener("click", function () {
    let div = document.getElementById(`${this.textContent}`);

    // Set sections as active

    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove("your-active-class");
    }

    // Add class 'active' to section when near top of viewport

    div.classList.add("your-active-class");

    // show();
    // Scroll to anchor ID using scrollTO event
    div.scrollIntoView({ behavior: "smooth" });
  });

  n++;
}

/* --- Build Navigation Menu --- */
bu.addEventListener("click", show);
function show() {
  if (nv.style.display == "block") {
    bu.style.top = "10px";
    nv.style.display = "none";
    bu.style.color = "white";
    bu.style.transform = "rotate(0deg)";
    bu.style.border = "1px solid white";
    bu.style.opacity = "0.9";
  } else {
    nv.style.display = "block";
    bu.style.top = "55px";
    bu.style.transform = "rotate(90deg)";
    bu.style.opacity = "0.72";
  }
}
/**

 * End Main Functions

 * Begin Events

 * 

 */
