// As classes "Admin" e "Docente" herdam de "User"

class User {
    // A # serve para atribuir propriedades privadas, no Javascript
    #nome
    #sobrenome
    #email
    #nascimento
    #role
    #ativo

    constructor(nome, sobrenome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }

    get nome() {
        return this.#nome;
    }

    get sobrenome() {
        return this.#sobrenome;
    }

    get email() {
        return this.#email;
    }

    get nascimento() {
        return this.#nascimento;
    }

    get role() {
        return this.#role;
    }

    get ativo() {
        return this.#ativo;
    }

    set nome(novoNome) {
        if (novoNome === '') {
            throw new Error('Parâmetro inválido!');
        }
        let [nome, ...sobrenome] = novoNome.split(" ");
        sobrenome = sobrenome.join(' ')
        this.#nome = nome;
        this.#sobrenome = sobrenome;
    }

    exibirInfos() {
        return `${this.#nome}, ${this.#sobrenome}, ${this.#email}, ${this.#nascimento}, ${this.#role}, ${this.#ativo}`;
    }

    // Método privado dentro da classe User, que acessa as propriedades privadas contidas nessa classe
    // #montaObjetoUser() {
    //     return ({
    //         nome: this.#nome,
    //         email: this.#email,
    //         nascimento: this.#nascimento,
    //         role: this.#role,
    //         ativo: this.#ativo
    //     })
    // }

    // O método exibirInfos acessa o método privado #montaObjetoUser, internamente na classe
    // exibirInfos() {
    //     const objUser = this.#montaObjetoUser();
    //     return `${objUser.nome}, ${objUser.email}, ${objUser.nascimento}, ${objUser.role}, ${objUser.ativo}`;
    // }
}

export default User; // Ecma Script modules sintax model

// POO serve não só para economizar código, e tornar o projeto mais limpo
// como também serve para tornar toda a estrutura do projeto mais coesa

// Hoisting -> JavaScript não tem hoisting para classes, que nada mais é do que quando 
// uma linguagem, puxa métodos antes de serem declarados. Tornando impossível instanciar 
// classes antes de serem declaradas. Isso é conhecido como Javascript Strict Mode.