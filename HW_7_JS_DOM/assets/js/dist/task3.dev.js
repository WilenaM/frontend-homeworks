"use strict";

function svitlofor() {
  var red = document.querySelector('#red');
  var yellow = document.querySelector('#yellow');
  var green = document.querySelector('#green');

  if (red.classList.contains('vkl')) {
    red.classList.remove('vkl');
    green.classList.add('vkl');
  } else if (green.classList.contains('vkl')) {
    green.classList.remove('vkl');
    yellow.classList.add('vkl');
  } else if (yellow.classList.contains('vkl')) {
    yellow.classList.remove('vkl');
    red.classList.add('vkl');
  }
}

document.querySelector('button').onclick = svitlofor;