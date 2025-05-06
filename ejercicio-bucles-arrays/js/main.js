"use strict";

// 1. Crear una función que devuelva un array con los números del 1 al 100

function get100Numbers() {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return numbers;
}

get100Numbers();
get100Numbers().forEach((num) => console.log(num));

function getReverse100Numbers() {
  const numbers = get100Numbers();
  const reverseNumbers = numbers.reverse();
  return reverseNumbers;
}

getReverse100Numbers().forEach((num) => console.log(num));
