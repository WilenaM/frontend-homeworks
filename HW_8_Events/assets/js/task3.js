const ramkaText = document.querySelector('#ramka');
const rightFrame = document.querySelector('#rightFrame');

rightFrame.addEventListener('mousedown', function(event){
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
})

function resize(event) {
   const newWidth = event.pageX - ramkaText.offsetLeft;
   const newHeight = event.pageY - ramkaText.offsetTop;
    
   ramkaText.style.width = newWidth + 'px';
   ramkaText.style.height = newHeight + 'px';
}

function stopResize() {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);


}