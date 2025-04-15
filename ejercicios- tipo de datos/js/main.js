/* // ejercicio 1 \\

9 + 7 + 3;
console.log(9 + 7 + 3); // 19

const Laura = 3;
const Joana = 7;
const Sara = 9;
console.log(Laura + Joana + Sara); // 19

// ejercicio 2 \\

const superWave = document.querySelector(".super-wave");

superWave.style.backgroundColor = "blue";

// ejercicio 3 \\
const Kiwis = 5;
const Peras = 2;
const Uvas = 4;
console.log(Kiwis * 2 + Peras * 3 + Uvas * 0.5 + "€"); // 5*2 + 2*3 + 4*4 = 10 + 6 + 16 = 32
console.log("Total compra", Kiwis + Peras + Uvas, "frutas"); // 5 + 2 + 4 = 11
 */
/* // ejercicio 4 \\
const edad = document.querySelector(".js_edad");
const boton = document.querySelector(".js_boton");
const resultado = document.querySelector(".js_resultado");

boton.addEventListener("click", (ev) => {
  console.log(edad.value * 365 * 24);
  resultado.innerHTML = `Tu edad en horas es ${edad.value * 365 * 24}`;
}); */

// ejercicio 6 \\

const nombre = document.querySelector(".js_nombre");
const caracteres = document.querySelector(".js_caracteres");
const input = document.querySelector(".js_input");
const boton = document.querySelector(".js_boton");

console.log("Resultado", nombre.value.length);
