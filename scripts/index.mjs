import { addNavbar } from './UI/navbar.mjs';

const clearHelper = function() {
  document.getElementById('helper').style.display = 'none';
}

const addToolTip = function(number) {
  if (document.getElementById(`popup${number}`)) {
    const tooltipElement = document.createElement('div');
    tooltipElement.id = `tooltip${number}`;
    tooltipElement.className = 'tooltip';
    tooltipElement.style.position = 'absolute';
    tooltipElement.style.top = '9vw';
    let currentInnerHTML;
    if (number == 1) {
      currentInnerHTML = `
      <p class="tooltip-text"> <a href="#software">
      Take a look at software I have recently created</a></p>
      <p class="tooltip-text"><a href="#projects">
      Take a look at coding I did at university</a></p>
      `;
      removeTooltip(2);
      removeTooltip(3);
    } else if (number == 2) {
      currentInnerHTML = `
      <p class="tooltip-text"><a href="skills.html#education">
      Take a look at certificates I have obtained/am working towards</a></p>
      <p class="tooltip-text"><a href="skills.html#skills">
      Take a look at my key skills</a></p>
      `;
      removeTooltip(1);
      removeTooltip(3);
    } else if (number == 3) {
      currentInnerHTML = `
      <p class="tooltip-text"><a href="interests.html#sydneycoastline">
      Take a look at some images I have taken</a></p>
      <p class="tooltip-text"><a href="interests.html#reviews-section">
      Take a look at what i've been watching and reading</a></p>
      `;
      removeTooltip(1);
      removeTooltip(2);
    }
    tooltipElement.innerHTML = currentInnerHTML;
    if (document.getElementById(`popup${number}`).children.length < 2) {
      document.getElementById(`popup${number}`).appendChild(tooltipElement);
    }
  }
}

const removeTooltip = function(number) {
  let popup;
  let tooltip;
  popup = document.getElementById(`popup${number}`);
  popup.style.backgroundColor = '#f91';
  tooltip = document.getElementById(`tooltip${number}`);
  if (tooltip) {
    popup.removeChild(tooltip);
  }
}

setTimeout(clearHelper, 7500);

let isNavDisplayed = false;
window.addEventListener('scroll', e => {
  if (window.scrollY > '500' && !isNavDisplayed) {
    addNavbar();
    removeTooltip(1);
    removeTooltip(2);
    removeTooltip(3);
    isNavDisplayed = true;
  }
  if (window.scrollY <= '500' && isNavDisplayed) {
    document.getElementById('header').innerHTML = '';
    isNavDisplayed = false;
  }
})

document.getElementById('popup1').addEventListener('mouseover', e => {
  document.getElementById('popup1').style.backgroundColor = '#f60';
  addToolTip(1);
  clearHelper();
});
document.getElementById('popup2').addEventListener('mouseover', e => {
  document.getElementById('popup2').style.backgroundColor = '#f60';
  addToolTip(2);
  clearHelper();
});
document.getElementById('popup3').addEventListener('mouseover', e => {
  document.getElementById('popup3').style.backgroundColor = '#f60';
  addToolTip(3);
  clearHelper();
});
