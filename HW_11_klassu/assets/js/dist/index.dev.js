"use strict";

var _circle = _interopRequireDefault(require("./circle.js"));

var _fillMarker = _interopRequireDefault(require("./fillMarker.js"));

var _employee = _interopRequireDefault(require("./employee.js"));

var _emptable = _interopRequireDefault(require("./emptable.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var circle;

function createCircle(event) {
  event.preventDefault();
  var inputRadius = document.querySelector('#radius');
  var radius = inputRadius.value;
  inputRadius.value = '';

  if (radius > 0) {
    circle = new _circle["default"](radius);
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
  var vidsotku = +vidsotkuEl.value;
  vidsotkuEl.value = '';
  marker = new _fillMarker["default"](colorCss, vidsotku);
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

function fillMarker(event) {
  event.preventDefault();
  var amountEl = document.querySelector('#marker_fill_amount');
  var amount = +amountEl.value;
  amountEl.value = '';
  marker.fill(amount);
  showMarkerInfo();
}

document.querySelector('#marker_fill').addEventListener('submit', fillMarker);
var employees = [new _employee["default"]('John', 'Doe', 'Middle Front-end', 3000, 'Beetroot'), new _employee["default"]('Joan', 'Doe', 'Project Manager', 2500, 'Beetroot'), new _employee["default"]('Brian', 'Smith', 'Senior Back-end', 5500, 'Beetroot'), new _employee["default"]('Bob', 'Jons', 'Middle Back-end', 3500, 'Shopping Cart'), new _employee["default"]('Alan', 'Black', 'Senior Front-end', 5000, 'Shopping Cart'), new _employee["default"]('William', 'Green', 'Senior Back-end', 5300, 'Shopping Cart'), new _employee["default"]('Jennifer', 'White', 'Project Manager', 4000, 'Shopping Cart'), new _employee["default"]('Jessica', 'Potter', 'Middle QA Engineer', 3000, 'Shopping Cart')];
var empTable = new _emptable["default"](employees);
document.querySelector('#forEmployees').prepend(empTable.getHtml());