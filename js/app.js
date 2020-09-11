// Define Global Variables
let navUl = document.getElementById("navbar__list");
let sections = document.getElementsByTagName("section");
let n = 0;
let dtNavValue = "";
let nv = document.querySelector(".navbar__menu");
let bu = document.querySelector("#nav-drawer");
let topButton=document.getElementById('top-bu');

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
  
  // Add anchor links
  navLink.href = "#" + dtNavArray[n + 1];
  navLink.addEventListener("click", function(){
    let div = document.getElementById(`${this.textContent}`);

    // Set/Remove active sections
    for (var i = 0; i < sections.length; i++) {
      sections[i].classList.remove("your-active-class");
    }
    div.classList.add("your-active-class");
    
    /* -close navigation menu after clicking a section-
   **ShowSideNav();
   */
  });
  n++;
}
/* -- Style Navigation Menu -- */
let ShowSideNav=()=> {
  if (nv.style.display == "block") {
   bu.style.top = "10px";
    nv.style.display = "none";
    bu.style.transform = "rotate(0deg)";
    bu.style.opacity = "0.95";
    
  } else {
    nv.style.display = "block";
    bu.style.top = `${nv.clientHeight+10}px`;
    bu.style.transform = "rotate(90deg)";
    bu.style.opacity = "0.85";
  }
}
bu.addEventListener("click", ShowSideNav);

/* -- Add go-to top button at the end of the page -- */
window.onscroll = ()=> {
    topButton.style.opacity=0;
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
   //the bottom of the page 
      topButton.style.opacity=1;
        /*--Scroll to top page using scrollTO event--*/
      topButton.addEventListener('click',()=>{
         scrollTo({top:0,left:0,behavior:'smooth'});
})
}
}
