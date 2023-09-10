const ListOfBooks = require("./data/array.js");

function MergeSort(array) {
    let result = array;

    if (array.length > 1) {
        // Cut in halfs recursively
        const medium = Math.floor(array.length / 2);
        const firstHalf = MergeSort(array.slice(0, medium));
        const secondHalf = MergeSort(array.slice(medium, array.length));

        // Order smaller halfs
        let currentFirstHalfIndex = 0;
        let currentSecondHalfIndex = 0;
        result = [];

        while (currentFirstHalfIndex < firstHalf.length && currentSecondHalfIndex < secondHalf.length) {
            if (secondHalf[currentSecondHalfIndex].preco < firstHalf[currentFirstHalfIndex].preco) {
                result.push(secondHalf[currentSecondHalfIndex]);
                currentSecondHalfIndex++;
            }
            else {
                result.push(firstHalf[currentFirstHalfIndex]);
                currentFirstHalfIndex++;
            }
        }

        currentFirstHalfIndex == firstHalf.length ? result = result.concat(secondHalf.slice(currentSecondHalfIndex)) : result = result.concat(firstHalf.slice(currentFirstHalfIndex));
    }

    return result;
}

const result = MergeSort(ListOfBooks);
console.log(result);