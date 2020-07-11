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
      // Will change this to projects once ive done Abdul's
      currentInnerHTML = `
      <p class="tooltip-text"><a href="#education">
      Take a look at my certifications</a></p>
      <p class="tooltip-text"> <a href="skills.html#projects">
      Take a look at my projects</a></p>
      `;
    } else if (number == 2) {
      currentInnerHTML = `
      <p class="tooltip-text"><a href="skills.html#skills">
      Take a look at my key skills</a></p>
      <p class="tooltip-text"><a href="skills.html#projects">
      Take a look at projects I have worked on</a></p>
      `;
    } else if (number == 3) {
      currentInnerHTML = `
      <p class="tooltip-text"><a href="interests.html#reviews-section">
      Take a look at what i've been watching and reading</a></p>
      <p class="tooltip-text"><a href="interests.html#sydneycoastline">
      Take a look at some images I have taken</a></p>
      `;
    }
    tooltipElement.innerHTML = currentInnerHTML;
    if (document.getElementById(`popup${number}`).children.length < 2) {
      document.getElementById(`popup${number}`).appendChild(tooltipElement);
    }
  }
}

const removeTooltips = function() {
  let popup;
  let tooltip;
  for (let i = 1; i < 4; i++) {
    popup = document.getElementById(`popup${i}`);
    popup.style.backgroundColor = '#b66';
    tooltip = document.getElementById(`tooltip${i}`);
    if (tooltip) {
      popup.removeChild(tooltip);
    }
  }
}

setTimeout(clearHelper, 7500);

let isNavDisplayed = false;
window.addEventListener('scroll', e => {
  if (window.scrollY > '500' && !isNavDisplayed) {
    addNavbar();
    removeTooltips();
    isNavDisplayed = true;
  }
  if (window.scrollY <= '500' && isNavDisplayed) {
    document.getElementById('header').innerHTML = '';
    isNavDisplayed = false;
  }
})

document.getElementById('popup1').addEventListener('mouseover', e => {
  document.getElementById('popup1').style.backgroundColor = '#f91';
  addToolTip(1);
  clearHelper();
});
document.getElementById('popup2').addEventListener('mouseover', e => {
  document.getElementById('popup2').style.backgroundColor = '#f91';
  addToolTip(2);
  clearHelper();
});
document.getElementById('popup3').addEventListener('mouseover', e => {
  document.getElementById('popup3').style.backgroundColor = '#f91';
  addToolTip(3);
  clearHelper();
});

document.querySelectorAll(".homeCard").forEach(card => {
  card.addEventListener('mouseover', e => {
    card.style.backgroundColor = '#f91';
  })
})

document.querySelectorAll(".homeCard").forEach(card => {
  card.addEventListener('mouseout', e => {
    card.style.backgroundColor = '#ddd';
    // const description = document.createElement('p');
    // description.innerHTML = 'Learnt how to use JavaScript in depth..';
  })
})
