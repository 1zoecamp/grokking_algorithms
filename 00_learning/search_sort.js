"use strict";

/**
 * Searches recursively number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 */

/** Binary Search */
function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];
        
        if (guess === item) {
            return mid;
        } else if (guess > item) {
      high = mid - 1;
    } else {
        low = mid + 1;
    }
}

  return null;
}

/**
 * Selection sort 
 * Finds the index of the element with the smallest value in the array
 * @param {Array} array Source array
 * @returns {number} Index of the element with the smallest value
 */
function findSmallestIndex(array) {
    var smallestElement = array[0]; // Stores the smallest value
    var smallestIndex = 0; // Stores the index of the smallest value
  
    for (var i = 1; i < array.length; i++) {
      if (array[i] < smallestElement) {
        smallestElement = array[i];
        smallestIndex = i;
      }
    }
  
    return smallestIndex;
  }
  
  /**
   * Sort array by increment
   * @param {Array} array Source array
   * @returns {Array} New sorted array
   */
  function selectionSort(array) {
    var sortedArray = [];
    var copyArray = array.slice();
    var length = array.length;
  
    for (var i = 0; i < length; i++) {
      // Finds the smallest element in the array
      var smallestIndex = findSmallestIndex(copyArray);
      // Adds the smallest element to new array
      sortedArray.push(copyArray.splice(smallestIndex, 1)[0]);
    }
  
    return sortedArray;
  }
  

/** Form */
var form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário
    
  var numerosInput = document.getElementById("numeros");
  var numeros = numerosInput.value.split(",").map((x) => Number(x));
  
  let ordem = selectionSort(numeros)
  let sordem = document.getElementById("ordered");
  sordem.innerHTML = ordem;

  var pesquisaInput = document.getElementById("pesquisa");
  var pesquisa = Number(pesquisaInput.value);
  
  let resultado = binary_search(ordem, pesquisa);
  let sposition = document.getElementById("position");
  sposition.innerHTML = resultado;
  
  let spesquisa = document.getElementById("search");
  spesquisa.innerHTML = pesquisa;

});
