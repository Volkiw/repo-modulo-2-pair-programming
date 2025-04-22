// ejercicio 1
// multiplicar dos valores en una función
// multiplicación con parámetros:

function multiplica(num1, num2) {
  let resultado = num1 * num2;
  console.log(resultado);
}

//llamada a la función con parámetros

multiplica(2, 5);
multiplica(12, 67);
multiplica(8, 3);

// función con cuatro parámetros que te devuelva la media
function mediaParametros(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4)/4;
  console.log(media);
}

// llamada a la función de la media

mediaParametros(3, 3, 3, 3);
mediaParametros(2, 5, 7, 10);
mediaParametros(5, 5, 10, 20);


// true si es par false si es impar
/* if-- X/2= numero entero = par = true -> resto = 0
   else-- ((X/2= numero con decimales = (resto = 1) impar = ))false 
   */

function parImpar (numero){
    let esPar = numero%2===0;
    console.log(esPar);
    return esPar; // si quisiésemos usarlo fuera de esta función
  }

parImpar (3)

// evento clic para saber si es par o impar

const numParImpar = document.querySelector(".js_numero");
const btn = document.querySelector(".js_button");
const respuesta = document.querySelector(".js_resultado");

// evento (llamando a la función)
btn.addEventListener ("click", (ev) => {
  console.log("evento 1 funciona");
  let numValue = numParImpar.value; // dar una variable al value del input
  let resultado = parImpar (numValue); // dar una variable a la llamada de la función

  if (resultado === true){ // si la función da true
    respuesta.innerHTML = "es par"
  } else {
     respuesta.innerHTML = "es impar"
  }

});

// evento sin llamar a la función
/* 
btn.addEventListener ("click", (ev) => {
  console.log("evento 2 funciona");
  if (numParImpar.value%2===0){
    respuesta.innerHTML = "es par"
  } else {
     respuesta.innerHTML = "es impar"
  }

}); */

// ticket con IVA 
function ticketIva (precio){
  let iva = precio*0.21;
  let precioTotal = precio + iva;
console.log(`Precio sin IVA: ${precio}€, con un IVA de ${iva}€ sale a un total de: ${precioTotal}€.`);
}

ticketIva (8)


// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"


// EJERCICIOS EXTRAS get element y loguear errores

function getEl(selector){
  const llamada = document.querySelector(selector);
  if (!llamada) {  // si hay error en la constante "el"
    console.error(`❌ No existe ningún elemento con clase, id o tag llamado '${selector}'`);
  } else {
    console.log("elemento encontrado")
  }
  return llamada;
}

getEl(".js_div_extra") // bien
getEl("div_extra") // mal

const boxEl = getEl('.js_parrafo_extra');       // existe
const fakeEl = getEl('js_button_extra'); // no existe -> muestra error en consola

// if ==="" (no tiene ningún valor) que diga "No existe ningún elemento con clase, id o tag llamado {aquí-el-nombre-del-selector}""

  
/* function getEl(selector) {
      const el = document.querySelector(selector);
      if (!el) {
        console.error(`❌ No existe ningún elemento con clase, id o tag llamado '${selector}'`);
      }
      return el;
    

} */

  