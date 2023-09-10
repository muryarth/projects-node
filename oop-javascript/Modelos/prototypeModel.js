// Objeto padrão
const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}

// Herança de protótipo
const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado!');
    }
}

// "admin" usa "user" como protótipo, portanto os métodos de "user" são acessíveis
Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();

// O método "__proto__" acessa o protótipo herdado a partir de determinado objeto.
// No caso acima, o chamar o método "__proto__" para "admin", estaria fazendo referência a "user", acessando os dados de seus atributos
// O funcionamento do JavaScript, de pingar de objeto em objeto atrás da instrução que foi dada, chama-se de cadeia de protótipo
// "__proto__" está para ser descontinuado