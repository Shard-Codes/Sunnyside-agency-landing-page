// Toggling the navigation menu
const navMenu = document.querySelector('.nav__menu'),
      navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', () =>{
  navMenu.classList.toggle('open__menu');
})

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a");
allLinks.forEach((Link) =>
  Link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = Link.getAttribute("href");

    // Scroll back to top & scroll to other sections
    if (href == "#") {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const Section = document.querySelector(href);
      Section.scrollIntoView({ behavior: "smooth" });
    }
  })
);

// Close menu when scrolling on the webpage
function closeMenu() {
  window.onscroll = () => {
    navMenu.classList.remove('open__menu');
  }
}

window.addEventListener('scroll', closeMenu);