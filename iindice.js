function animateProgress() {
    let htmlProg = document.querySelector('.html-progress');
    let cssProg = document.querySelector('.css-progress');
    let jsProg = document.querySelector('.js-progress');
    let comProg = document.querySelector('.comunicacion-progress');
  
    let width = 0;
    let id = setInterval(frame, 10);
  
    function frame() {
      if (width >= 90) {
        clearInterval(id);
      } else {
        width++;
        htmlProg.value = width;
        cssProg.value = width - 10;
        jsProg.value = width - 20;
        comProg.value = width - 10;
        window.onload = animateProgress;

      }
    }
  }
  


// Obtenemos todos los links de navegación
var links = document.querySelectorAll('nav a');

// Escuchamos cuando se hace clic en un link
links.forEach(function(link) {
    link.addEventListener('click', function(event) {

        event.preventDefault();

        // Ocultamos todas las secciones
        var contents = document.querySelectorAll('#content > section');
        contents.forEach(function(content) {
        content.style.display = 'none';
        });

        // Mostramos la sección correspondiente
        var target = this.getAttribute('href').substr(1);
        document.querySelector('#' + target).style.display = 'block';

    });
});





