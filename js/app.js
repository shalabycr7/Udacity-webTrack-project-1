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

  var createdLiElements = document.createElement("li");

  var link = document.createElement("a");

  createdLiElements.classList.add("menu__link");

  createdLiElements.appendChild(link);

  navUl.appendChild(createdLiElements);
}

let dtNavArray = dtNavValue.split(" ");

let navLinks = document.querySelectorAll(" nav li a");

for (var navLink of navLinks) {
  navLink.textContent = dtNavArray[n + 1];

  // Scroll to section on link click

  //navLink.href='#'+dtNavArray[n+1];

  navLink.addEventListener("click", function () {
    let div = document.getElementById(`${this.textContent}`);

    // Set sections as active

    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove("your-active-class");
    }

    // Add class 'active' to section when near top of viewport

    div.classList.add("your-active-class");

    // Scroll to anchor ID using scrollTO event
    nv.style.display = "none";

    div.scrollIntoView();
  });

  n++;
}

bu.addEventListener("click", show);

function show() {
  nv.style.display = "block";
}
/**

 * End Main Functions

 * Begin Events

 * 

 */

// Build menu
