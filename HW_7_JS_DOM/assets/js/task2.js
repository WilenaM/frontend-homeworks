var dialog = document.querySelector('dialog');
dialog.style.position = 'absolute'
dialog.style.top = '50px'
dialog.style.width = '600px'
dialog.style.height = '150px'
document.querySelector('#openDialog').onclick = function() {
 dialog.show(); 
}
document.querySelector('#closeDialog').onclick = function() {
 dialog.close();
}