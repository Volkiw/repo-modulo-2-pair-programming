'use strict';
// ejercicio 1
// bio de adalabers: crear un objeto con info sobre la adalaber


const fraseAdalaber = document.querySelector(".js_frase_adalaber");

// crear objeto
const adalaber1 = {
  nombre: "Susana",
  edad: "34",
  profesion: "periodista",
  //ejercicio 2: añadir método/función
  run: function () {
    console.log("Estoy corriendo");
  },
  runMarathon: function(distance){ // distance es un parámetro
    console.log(`Estoy corriendo una maratón de ${distance} kilómetros.`);
  },
  showBio: function (){
    console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`);
  }
}


let adalaber2 = {
  nombre: "Rocio",
  edad: "25",
  profesion: "actriz",
  showBio: function (){
    console.log(`Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`);
  }
}


adalaber1.run (); // activamos la función/método de adalaber1 run
adalaber1.runMarathon (45); // activamos la función/método de adalaber1 run
// 45 es el argumento del parámetro distance
adalaber1.showBio();
adalaber2.showBio();


fraseAdalaber.innerHTML+= `Hola, mi nombre es ${adalaber1.nombre} y tengo ${adalaber1.edad} años y soy ${adalaber1.profesion}. <br/>`;
fraseAdalaber.innerHTML += `Hola, mi nombre es ${adalaber2.nombre} y tengo ${adalaber2.edad} años y soy ${adalaber2.profesion}.`;