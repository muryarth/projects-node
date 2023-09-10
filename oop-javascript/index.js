import User from './User.js';
import Admin from './Admin.js';
import Docente from './Docente.js';
import chalk from 'chalk';

// const novoUser = new User('Arthur', 'a@a.com', '22-12-1998');
// console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Arthur', 'Mury', 'm@m.com', '22-12-1998');
console.log(chalk.green(novoAdmin.exibirInfos()));

const novoDocente = new Docente('Guilherme', 'Briggs', 'g@g.com', '2021-01-01');
console.log(novoDocente.exibirInfos());

// Esta entrada gera um erro, dado que a propriedade nome está sendo tratada dentro
// do método setter na classe
// novoAdmin.nome = '';

// Com identificador de privacidade "#", não será possível acessar propriedades encapsuladas
// novoUser.#nome = 'Márcia';
// console.log(novoUser.#nome );

// Sem identificador de privacidade "#", vai criar uma nova propriedade pública no objeto
// novoUser.nome = 'Márcia';
// console.log(novoUser.nome );