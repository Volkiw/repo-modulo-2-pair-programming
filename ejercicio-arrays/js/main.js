'use strict';
const listaPeliculas = ["Sueño de fuga", "El padrino", "El señor de los anillos"];
const listUl = document.querySelector(".js_list");

function workWithMovies () {
  console.log(listaPeliculas);
  listaPeliculas[3] = "Origen";
  listaPeliculas[1] = "El silencio de los corderos";
}

workWithMovies();

function paintMovies() {
  listUl.innerHTML = "";
  listUl.innerHTML += `<li>${listaPeliculas[0]}</li>`;
  listUl.innerHTML += `<li>${listaPeliculas[1]}</li>`;
  listUl.innerHTML += `<li>${listaPeliculas[2]}</li>`;
  listUl.innerHTML += `<li>${listaPeliculas[3]}</li>`;
}

paintMovies();