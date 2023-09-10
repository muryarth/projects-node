const libraryList = require("./data/array.js");

function quickSort(array) {
    if (array.length <= 1) { // Condição de parada da função recursiva
        return array;
    }

    // 1. Defina um índice para o pivô da ordenação

    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex];

    // 2. Defina o lado "menor" e o lado "maior" da ordenação (esquerda e direta do pivô)

    let lessers = [];
    let greaters = [];

    for (let i = 0; i < array.length; i++) {
        if (i !== pivotIndex) {
            if (Number(array[i].preco) <= Number(pivot.preco)) {
                lessers.push(array[i]);
            }
            else {
                greaters.push(array[i]);
            }
        }
    }

    // 3. Ordene ambos os lados e defina um novo pivot

    lessers = quickSort(lessers);
    greaters = quickSort(greaters);

    return ([...lessers, pivot, ...greaters]);
}

const sortedArray = quickSort(libraryList);
console.log(sortedArray);