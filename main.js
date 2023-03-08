var menu_visible =false;
let menu= document.getElementById("nav");
function MostrarOcultarMenu(){
  if (menu_visible==false){
    menu.style.display= "block";
    menu_visible= true;}
    else {
      menu.style.display = "none";
      menu_visible = "false"
    
  }
}



// Seleccionar el botón
const button = document.querySelector('button');

// Agregar un evento al botón
button.addEventListener('click', () => {
  alert('¡Hola! Has hecho clic en el botón.');
});


  progressBars.forEach(bar => {
    const value = bar.dataset.value;
    bar.style.width = `${value}%`;
  });