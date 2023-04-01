/*===toggle icon nav bar===*/
const menuIcon = document.querySelector('#menu-icons');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
    }
  });

  const header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);
};
