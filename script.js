const base = document.getElementById('base');
const arte = document.getElementById('arte');
const corSelect = document.getElementById('corSelect');
const upload = document.getElementById('upload');

// trocar cor da camiseta
corSelect.addEventListener('change', () => {
  base.src = corSelect.value === 'preta' ? 'camiseta_preta.png' : 'camiseta_branca.png';
});

// adicionar arte do cliente
upload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
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
  if (!isDragging) return;
  arte.style.left = (e.pageX - offsetX - base.offsetLeft) + 'px';
  arte.style.top = (e.pageY - offsetY - base.offsetTop) + 'px';
});
window.addEventListener('mouseup', () => isDragging = false);
