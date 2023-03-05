// Seleccionar el botón
const button = document.querySelector('button');

// Agregar un evento al botón
button.addEventListener('click', () => {
  alert('¡Hola! Has hecho clic en el botón.');
});

const progressBars = document.querySelectorAll('.progress-bar');

  progressBars.forEach(bar => {
    const value = bar.dataset.value;
    bar.style.width = `${value}%`;
  });