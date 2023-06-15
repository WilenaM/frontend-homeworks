"use strict";

// var dialog = document.querySelector('dialog');
// dialog.style.position = 'absolute'
// dialog.style.top = '50px'
// dialog.style.width = '600px'
// dialog.style.height = '150px'
// document.querySelector('#openDialog').onclick = function() {
//  dialog.show(); 
// }
// document.querySelector('#closeDialog').onclick = function() {
//  dialog.close();
// }
function closeModal() {
  document.querySelector('.modalVikno').remove();
}

function openModal() {
  var modalVikno = document.createElement('div');
  modalVikno.classList.add('modalVikno');
  var p = document.createElement('p');
  p.innerText = document.querySelector('#textTask').innerText;
  modalVikno.append(p);
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.onclick = closeModal;
  btn.innerText = 'Zakrutu';
  modalVikno.append(btn);
  document.body.prepend(modalVikno);
}

document.querySelector('#openDialog').onclick = openModal;