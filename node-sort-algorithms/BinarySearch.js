const libraryList = require("./data/orderedArray.js");

function search(array, targetValue) {
    let currentIndex = Math.floor(array.length / 2);

    // Encerra o processamento caso não encontre nenhum item
    if (array.length < 1) {
        return `nenhum valor encontrado`;
    }

    // Verifica se o valor atual é igual ao valor da busca

    if (Number(array[currentIndex].preco) === targetValue) {
        return array[currentIndex];
    }

    // Verifica se o valor atual é maior ou menor que valor da busca, e particiona em problemas menores

    if (Number(array[currentIndex].preco) > targetValue) {
        // return `É MENOR: ${JSON.stringify(array.slice(0, currentIndex))}`;
        return search(array.slice(0, currentIndex), targetValue);
    }

    if (Number(array[currentIndex].preco) < targetValue) {
        // return `É MAIOR: ${JSON.stringify(array.slice(currentIndex + 1))}`;
        return search(array.slice(currentIndex + 1), targetValue);
    }
}

console.log(search(libraryList, 28));