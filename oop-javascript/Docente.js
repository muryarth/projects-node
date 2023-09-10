import User from "./User.js";

export default class Docente extends User {
    constructor(nome, sobrenome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, sobrenome, email, nascimento, role, ativo);
    }

    aprovarEstudante(estudante, curso){
        return `Estudante ${estudante} aprovado(a) no curso ${curso}.`;
    }
}