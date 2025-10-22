const base = document.getElementById('base');
const arte = document.getElementById('arte');
const upload = document.getElementById('upload');

// adicionar arte do cliente
upload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = () => { arte.src = reader.result; };
    reader.readAsDataURL(file);
  }
});

// arrastar arte
let offsetX, offsetY, isDragging = false;
arte.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.offsetX;
  offsetY = e.offsetY;
});
window.addEventListener('mousemove', (e) => {
  if(!isDragging) return;
  arte.style.left = (e.pageX - offsetX - base.offsetLeft) + 'px';
  arte.style.top = (e.pageY - offsetY - base.offsetTop) + 'px';
});
window.addEventListener('mouseup', () => isDragging = false);
