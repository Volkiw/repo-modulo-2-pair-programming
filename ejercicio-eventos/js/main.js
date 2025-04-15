
/* una página con dos botones
al hacer clic cambian sus estilos pero solo en el que hago clic */
const button = document.querySelector(".js_button");
const lorem = document.querySelector(".js_parrafo");
const saludo = document.querySelector(".js_input");
const nombre = document.querySelector(".js_span");
const buttonElegir = document.querySelector(".js_button_pedir");
const listaElegir = document.querySelector(".js_list_pedir");
const resultadoElegir = document.querySelector(".js_resultado_pedir");
const cancelarElegir = document.querySelector(".js_reset_pedir");

button.addEventListener("click", () => {
    console.log("click botón hecho");
    button.classList.toggle("button-toggle");
});

/* este duplicaría lo que ya hay dentro del párrafo:
lorem.addEventListener("click", () => {
    console.log("lorem funciona");
    lorem.innerHTML+= lorem.innerText;
}); */

lorem.addEventListener("click", () => {
    console.log("lorem funciona");
    lorem.innerHTML+= "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, commodi odit. Ducimus repellendus cupiditate, tempora dolore totam dicta soluta corporis enim sint praesentium quo repudiandae natus. Dolores odit modi rem! ";
});

saludo.addEventListener("input", (ev) => {
    console.log(saludo.value);
   // nombre.innerHTML = saludo.value;   // dame el valor del input con esta clase (variable "saludo") 
    nombre.innerHTML = ev.currentTarget.value; // dame el valor de donde estoy ahora mismo (que en este caso es lo mismo)

});

//cuando hago clic en el botón me muestra la lista
buttonElegir.addEventListener("click", () => {
    console.log("elegir casi funciona");
    listaElegir.classList.toggle("hidden");
});
//cuando hago clic en un nombre de la lista me da el resultado de qué he pedido
listaElegir.addEventListener("click", (ev) => {
    console.log(ev.target.innerHTML);
    resultadoElegir.innerHTML = "Has elegido " + "<strong>" + ev.target.innerHTML + "</strong>";
    cancelarElegir.classList.remove("hidden");
    resultadoElegir.classList.remove("hidden");
});

// en esta función ^ me da el error de darme como resultado (si señalo fuera de un li) toda la lista
// ^ solucionado eliminando todo el margen/padding de ul para que no quede hueco a darle a ul sin darle a li

cancelarElegir.addEventListener("click", (ev) => {
    console.log("funciona el reset casi");
    resultadoElegir.classList.add("hidden");
    cancelarElegir.classList.add("hidden");
});