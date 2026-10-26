const user = {
    nome: "juliana",
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
}
// const exibir = user.exibirInfos.bind(user);
// exibir()