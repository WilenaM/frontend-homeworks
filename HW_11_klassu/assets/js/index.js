import Circle from "./circle.js";
import FillMarker from "./fillMarker.js";
import Employee from "./employee.js";
import EmpTable from "./emptable.js";

let circle;

function createCircle(event) {
    event.preventDefault();
    const inputRadius = document.querySelector('#radius');
    const radius = inputRadius.value;
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
    const newRadius = document.querySelector('#new_radius');
    const r = newRadius.value;
    newRadius.value = '';

    if (r > 0) {
        circle.radius = r;
        renderCircle();
    } else {
        alert('Enter valid radius');
    }
}
document.querySelector('#up_circle').addEventListener('submit', updateCircle);



let marker;

function showMarkerInfo() {
    document.querySelector('#name_color').value = marker.color;
    document.querySelector('#balance').value = marker.paintAmount;

}

function creteMarker(event) {
    event.preventDefault();
    const colorCssEl = document.querySelector('#new_color');
    const colorCss = colorCssEl.value;
    colorCssEl.value = '';
    const vidsotkuEl = document.querySelector('#vidsotku');
    const vidsotku = +vidsotkuEl.value;
    vidsotkuEl.value = '';

    marker = new FillMarker(colorCss, vidsotku);
    showMarkerInfo();
}

document.querySelector('#new_marker').addEventListener('submit', creteMarker);

function writeText(event) {
    event.preventDefault();
    const textArea = document.querySelector('#print_text').value;
    document.querySelector('#result').innerHTML += marker.printText(textArea);
    showMarkerInfo();
}

document.querySelector('#balance_color').addEventListener('submit', writeText);

function fillMarker(event) {
    event.preventDefault();
    const amountEl = document.querySelector('#marker_fill_amount');
    const amount = +amountEl.value;
    amountEl.value = '';
    marker.fill(amount);
    showMarkerInfo();
}

document.querySelector('#marker_fill').addEventListener('submit', fillMarker)


const employees = [
        new Employee('John', 'Doe', 'Middle Front-end', 3000, 'Beetroot'),
        new Employee('Joan', 'Doe', 'Project Manager', 2500, 'Beetroot'),
        new Employee('Brian', 'Smith', 'Senior Back-end', 5500, 'Beetroot'),
        new Employee('Bob', 'Jons', 'Middle Back-end', 3500, 'Shopping Cart'),
        new Employee('Alan', 'Black', 'Senior Front-end', 5000, 'Shopping Cart'),
        new Employee('William', 'Green', 'Senior Back-end', 5300, 'Shopping Cart'),
        new Employee('Jennifer', 'White', 'Project Manager', 4000, 'Shopping Cart'),
        new Employee('Jessica', 'Potter', 'Middle QA Engineer', 3000, 'Shopping Cart')
];

const empTable = new EmpTable(employees);

document.querySelector('#forEmployees').prepend(empTable.getHtml())