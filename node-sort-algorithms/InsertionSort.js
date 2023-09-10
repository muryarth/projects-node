const data = require('./data/data.js');

console.log(data);

for (let i = 0; i < data.length; i++) {
    let atual = i;
    while (atual > 0 && Number(data[atual].price) < Number(data[atual - 1].price)) {
        let auxiliar = data[atual];
        data[atual] = data[atual - 1];
        data[atual - 1] = auxiliar;
        atual--;
    }
}

console.log(data);