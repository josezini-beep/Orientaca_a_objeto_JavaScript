import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, role = "Admin", ativo = true){
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeCurso,qtdVagas){
        return `curso ${nomeCurso} criado, tem ${qtdVagas} vagas!`
    }
}

// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos());
// console.log(novoAdmin.getEmail());
// console.log(novoAdmin.getNascimento());
// console.log(novoAdmin.getNome());
// console.log(novoAdmin.getRole());
// console.log(novoAdmin.getAtivo());
// novoAdmin.setNome("farinha");
// console.log(novoAdmin.getNome());
// console.log(novoAdmin.criarCurso('java',20))

