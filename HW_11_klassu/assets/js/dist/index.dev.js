"use strict";

var circle;

function createCircle(event) {
  event.preventDefault();
  var inputRadius = document.querySelector('#radius');
  var radius = inputRadius.value;
  inputRadius.value = '';

  if (radius > 0) {
    circle = new Circle(radius);
    renderCircle();
  } else {
    alert('Enter valid radius');
  }
}

function renderCircle() {
  document.querySelector('#radius_result').value = circle.radius;
  document.querySelector('#diametr').value = circle.diameter;
  document.querySelector('#area').value = circle.area();
  document.querySelector('#length').value = circle.length();
}

document.querySelector('#create_circle').addEventListener('submit', createCircle);

function updateCircle(event) {
  event.preventDefault();
  var newRadius = document.querySelector('#new_radius');
  var r = newRadius.value;
  newRadius.value = '';

  if (r > 0) {
    circle.radius = r;
    renderCircle();
  } else {
    alert('Enter valid radius');
  }
}

document.querySelector('#up_circle').addEventListener('submit', updateCircle);
var marker;

function showMarkerInfo() {
  document.querySelector('#name_color').value = marker.color;
  document.querySelector('#balance').value = marker.paintAmount;
}

function creteMarker(event) {
  event.preventDefault();
  var colorCssEl = document.querySelector('#new_color');
  var colorCss = colorCssEl.value;
  colorCssEl.value = '';
  var vidsotkuEl = document.querySelector('#vidsotku');
  var vidsotku = vidsotkuEl.value;
  vidsotkuEl.value = '';
  marker = new Marker(colorCss, vidsotku);
  showMarkerInfo();
}

document.querySelector('#new_marker').addEventListener('submit', creteMarker);

function writeText(event) {
  event.preventDefault();
  var textArea = document.querySelector('#print_text').value;
  document.querySelector('#result').innerHTML += marker.printText(textArea);
  showMarkerInfo();
}

document.querySelector('#balance_color').addEventListener('submit', writeText);