'use strict';

// contador con botón

const button = document.querySelector(".js_button");
const parrafo = document.querySelector(".js_parrafo");

function incrementarContador(){
  let contador = parseInt(parrafo.innerHTML);
  contador = contador + 1;
  parrafo.innerHTML = contador;
  console.log(parseInt(contador));
}

button.addEventListener("click", incrementarContador);




