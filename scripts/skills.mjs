import { addNavbar } from './UI/navbar.mjs';

addNavbar();

const welcomeBox = document.getElementById('welcome-box');

welcomeBox.addEventListener('mouseenter', e => {
  document.getElementById('top-logos').innerHTML = `
  <img class="cs-logo" src="images/js-logo.png" alt="JavaScript logo"/>
  <img class="cs-logo" src="images/cs-logo.png" alt="C# logo"/>
  `;
  document.getElementById('bottom-logos').innerHTML = `
  <img class="cs-logo" src="images/python-logo.png" alt="Python logo"/>
  <img class="cs-logo" src="images/r-logo.png" alt="R logo"/>
  `;
  document.getElementById('welcome-section').style.backgroundColor = "#89c";
});

welcomeBox.addEventListener('mouseleave', e => {
  document.getElementById('top-logos').innerHTML = '';
  document.getElementById('bottom-logos').innerHTML = '';
  document.getElementById('welcome-section').style.backgroundColor = "#304075";
})