"use strict";

const numbers = document.querySelector(".js-lista");

const numberlist = ["25", "42", "12", "7", "10"];

let acumulador = 0;

for (let i = 0; i < numberlist.length; i++) {
  acumulador += parseInt(numberlist[i]);
}

const media = acumulador / numberlist.length;

console.log(media);
