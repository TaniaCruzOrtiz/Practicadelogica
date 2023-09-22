/** EJERCICIO 1
 * User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
 */

function listaUsuarios(nombre, edad, [peli1, peli2, peli3]){
   let listaPeli = [peli1, peli2, peli3];
        console.log("Una de mis películas favoritas es: " + listaPeli);
     }   


/**  EJERCICIO 2
 * Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.
 * 
 */


function lista () {
    let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(arrayNumeros);
    console.log('Este es el número mayor en la lista anterior: ' + arrayNumeros[9]);
}

/**  EJERCICIO 3
 * Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.
 */


function alarma() {
  console.log('¡Despierta, es hora de empezar el día!');
}
let segundos = prompt ('Por favor, introduce los segundos que necesitas');
setTimeout(alarma, segundos);

console.log('Aún tienes tiempo para dormir...');


/**
 *    EJERCICIO 4
 * Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters
 */

function palindrome () {
  let palabra = prompt ('Por favor escriba una palabra u oración');

  palabra = /[\W_]/g;

  if (palabra )
}



/**   EJERCICIO 5
 * Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion
 */

let n = prompt('Introduce un número entero');
let factorial = n => {
  if(n === 0) {
    return 1;
  }else{
  return n * factorial(n - 1);
}
}

/**  EJERCICIO 6
 * Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...

let multiDimension = [1, [2, 3, [4, 5, [6]]]];
 */

function flatArray () {
  array.isarray
}































