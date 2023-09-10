import User from "./User.js"; // Importando classe User

export default class Admin extends User { // A palavra-chave "extends" faz a herança entre Admin e User
    constructor(nome, sobrenome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, sobrenome, email, nascimento, role, ativo); // Super-classe -> classe que fornece os parâmetros
        // Nesse sentido, "User" é a Super-Classe de Admin, e Admin é a Sub-Classe
        // As propriedades que a Sub-Classe herda da Super-Classe, podem ser administradas através 
        // dos parâmetros encontrados neste trecho de código.
        // No caso deste projeto a Sub-Classe herda todos as propriedades encontradas na Super-Classe
    }

    exibirInfos(){
        return `${this.nome}, ${this.email}, ${this.role}`; 
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas}`;
    }
}