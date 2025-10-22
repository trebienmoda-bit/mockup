const arte = document.getElementById('arte');
const upload = document.getElementById('upload');
const base = document.getElementById('base');

// Upload da arte
upload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(file){
    const reader = new FileReader();
    reader.onload = () => { 
      arte.src = reader.result; 
      arte.style.width = '150px';
      arte.style.transform = 'rotate(0deg)';
    };
    reader.readAsDataURL(file);
  }
});

// Arrastar
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

// Redimensionar com roda do mouse
arte.addEventListener('wheel', (e) => {
  if(e.shiftKey){
    // girar
    e.preventDefault();
    let rotate = arte.style.transform.match(/rotate\((-?\d+)deg\)/);
    rotate = rotate ? parseInt(rotate[1]) : 0;
    rotate += e.deltaY < 0 ? 5 : -5;
    arte.style.transform = `rotate(${rotate}deg)`;
  } else {
    // redimensionar
    e.preventDefault();
    let width = parseInt(arte.style.width);
    width += e.deltaY < 0 ? 10 : -10;
    if(width < 30) width = 30;
    if(width > 800) width = 800;
    arte.style.width = width + 'px';
  }
});
