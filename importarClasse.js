import User from "./User.js";

import Docente from "./Docent.js";

import Admin from "./Admin.js";

const novaDocente = new Docente("ana",'sdad','dsad', undefined, undefined, "superior", 2000)

const novaDocente2 = new Docente("feijão",'sdad','dsad', null, null, "médio", 1500)

const novoAdmin = new Admin("rodrigo",'j2j','2026')

const novoUser = new User("dsad" , "dsaasd" , "sadsad" , "fgdh" , "gfdgd")

console.log(novaDocente)
console.log(novaDocente.getSalario())

console.log(novaDocente2)
console.log(novaDocente2.getSalario())

console.log(novoAdmin)

console.log(novoUser)