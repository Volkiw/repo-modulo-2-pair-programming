// EJERCICIO 1
// 1. crear input para meter el nombre y mensaje bienvenida
// 2. llamada al input en js
// 3. crear event con concicionales si esto o esto   


const nombre = document.querySelector(".js_input");
const boton = document.querySelector(".js_button");
const bienvenida = document.querySelector(".js_bienvenida");

boton.addEventListener("click", (ev) => {
    console.log("hace click");
    if (nombre.value === "Maria" || nombre.value === "Luisa"){
        bienvenida.innerHTML = "Bienvenida " + nombre.value;
    } else {
        bienvenida.innerHTML = "Lo siento pero el usuario que has introducido no está registrado.";
    }
});


// EJERCICIO 2
// que nos dé respuestas según el número seleccionado

let numero = document.querySelector(".js_numero");
const botonNumero = document.querySelector(".js_button_numero");

botonNumero.addEventListener("click", (ev) => {
    console.log(parseInt(numero.value));
    const numeroInt = parseInt(numero.value);
    if (numeroInt === 0) {
        console.log('El número es 0');
      } else if (numeroInt > 0) {
        console.log('El número es negativo')
      }else if (numeroInt + 2 > 13 && numeroInt + 2 <= 20) {
        console.log('El número más 2 es mayor que 13 pero menor o igual que 20')
      }else if (numeroInt > 20 && numeroInt < 50) {
        console.log('El número es mayor que 20 pero menor que 50')
      }
      else {
        console.log('el número no es ninguno de los anteriores')
      }
      
});