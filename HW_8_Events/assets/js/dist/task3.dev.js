"use strict";

var ramkaText = document.querySelector('#ramka');
var rightFrame = document.querySelector('#rightFrame');
rightFrame.addEventListener('mousedown', function (event) {
  document.addEventListener('mousemove', resize);
  document.addEventListener('mouseup', stopResize);
});

function resize(event) {
  var newWidth = event.pageX - ramkaText.offsetLeft;
  var newHeight = event.pageY - ramkaText.offsetTop;
  ramkaText.style.width = newWidth + 'px';
  ramkaText.style.height = newHeight + 'px';
}

function stopResize() {
  document.removeEventListener('mousemove', resize);
  document.removeEventListener('mouseup', stopResize);
}