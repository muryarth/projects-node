const books = require('./data/data.js')

function GetLesserValueIndex(array, current) {
    let indexOfLesserValue = current;

    for (let i = current; i < array.length; i++) {
        if (Number(books[i].price) < Number(books[indexOfLesserValue].price)) {
            indexOfLesserValue = i;
        }
    }

    return indexOfLesserValue;
}

books.forEach((book, index) => {
    let lesserValue = GetLesserValueIndex(books, index);

    books[index] = books[lesserValue];
    books[lesserValue] = book;
})

console.log(books);