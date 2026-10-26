import User from "./User.js";

export default class Docente extends User{
    graduacao
    #salario
    constructor(
        nome, 
        email, 
        nascimento, 
        role = "Docente", 
        ativo = true, 
        graduacao,
        salario
    ) {
        super(nome, email, nascimento, role, ativo),
        this.graduacao = graduacao,
        this.#salario = salario
    }

    aprovarEstudante(estudante,curso) {
        return `estudante ${estudante} passou no curso de ${curso}, o responsavel ${this.getNome()} a aprovou`
    }

    getSalario() {
        return this.#salario
    }
}


// console.log(novaDocente.aprovarEstudante('julia','javascript'))
// console.log(novaDocente)
// console.log(novoUser)