// Define Global Variables

let navUl = document.getElementById('navbar__list');

let sections = document.getElementsByTagName('section');

let n = 0;

let dtNavValue = '';

// build the nav

for (let sec of sections) {

   dtNavValue += ` ${sec.getAttribute('data-nav')}`;

   var createdLiElements = document.createElement('li');

   var link = document.createElement('a');

   createdLiElements.classList.add('menu__link');

   createdLiElements.appendChild(link);

   navUl.appendChild(createdLiElements);

}

let dtNavArray = dtNavValue.split(' ');

let navLinks = document.querySelectorAll(' nav li a');

for (var navLink of navLinks) {

   navLink.textContent = dtNavArray[n + 1];

   // Scroll to section on link click

   //navLink.href='#'+dtNavArray[n+1];

   navLink.addEventListener('click', function() {

      let div = document.getElementById(`${this.textContent}`);

      // Set sections as active

      for (var i = 0; i < sections.length; i++) {

         sections[i].classList.remove('your-active-class');

      }

      // Add class 'active' to section when near top of viewport

      div.classList.add('your-active-class');

      // Scroll to anchor ID using scrollTO event

      div.scrollIntoView();

   })

   n++;

}

/**

 * End Main Functions

 * Begin Events

 * 

 */

// Build menu 
