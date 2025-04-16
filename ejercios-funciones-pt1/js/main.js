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

parImpar (18)
parImpar (4)

// evento clic para saber si es par o impar

const numParImpar = document.querySelector(".js_numero");
const btn = document.querySelector(".js_button");
const respuesta = document.querySelector(".js_resultado");

btn.addEventListener ("click", (ev) => {
  console.log("funciona");
  if (numParImpar.value%2===0){
    respuesta.innerHTML = "es par"
  } else {
     respuesta.innerHTML = "es impar"
  }

});


