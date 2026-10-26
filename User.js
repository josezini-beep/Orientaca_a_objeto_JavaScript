export default class User {
        #nome
        #email
        #nascimento
        #role
        #ativo
    constructor(nome, email, nascimento, role, ativo = true) {

        this.nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'Estudante'
        this.#ativo = ativo
    }

    getNome() {
        return this.#nome
    }

    setNome(nome) {
        this.#nome = nome
        return this.self
    }

    getEmail() {
        return this.#email
    }

    setEmail(email) {
        this.#email = email
        return this.self
    }

    getNascimento() {
        return this.#nascimento
    }

    setNascimento(nascimento) {
        this.#nascimento = nascimento
        return this.self
    }

    getRole() {
        return this.#role
    }

    setRole(role) {
        this.#role = role
        return this.self
    }

    getAtivo() {
        return this.#ativo
    }

    setAtivo(ativo) {
        this.#ativo = ativo
        return this.self
    }

    exibirInfos() {
        return `${this.#nome}, ${this.#email}`
    }
    #montaObjUser() {
        return({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        })
    }
};

