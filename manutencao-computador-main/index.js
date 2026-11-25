 const prompt = require("prompt-sync")()

 let nome = prompt("Digite seu nome:")

const boasvindas = (nome) => {
    return `Oi ${nome}, bem vindo ao sistema de manutenção de computadores`
}
console.log (boasvindas(nome))

let resposta = "Sim"
let problemas = []

function recomendarManutencao(problema) {

    if (problema === 1) {
        return "Verificar programas em segundo plano."
    }
    else if (problema === 2) {
        return "Verificar a ventilação do computador."
    }
    else if (problema === 3) {
        return "Verificar a conexão e o roteador."
    }
}
function identificarProblema(problema) {

    if (problema === 1) {
        return "Computador lento"
    }
    else if (problema === 2) {
        return "Superaquecimento"
    }
    else if (problema === 3) {
        return "Problemas de internet"
    }

}
let quantidadeDeProblemas = 0


while (resposta === "Sim") {

    console.log("Qual problema tem sua maquina?")
    console.log("1 computador lento")
    console.log("2 Super aquecimento")
    console.log("3 Problemas de internet")

    let problema = Number(prompt("Digite algum numero de opção acima"))

    switch (problema) {
        case 1:
            console.log("Problema de computador lento")
            problemas.push(problema)
            quantidadeDeProblemas++
            break

        case 2:
            console.log("Problema de computador com super aquecimento")
            problemas.push(problema)
            quantidadeDeProblemas++
            break

        case 3:
            console.log("Problema de internet")
            problemas.push(problema)
            quantidadeDeProblemas++
            break

        default:
            console.log("Opção invalida")
    }

    resposta = prompt("Deseja informar outro problema? (Sim/Não): ")

switch (resposta) {
    case "Sim":
    case "sim":
    case "SIM":
        resposta = "Sim"
        break

    case "Não":
    case "não":
    case "NÃO":
        resposta = "Não"
        break

}
}
const computador = {
    nome: nome,
    problemas: problemas,
    quantidadeProblemas: quantidadeDeProblemas
}

console.log("=-=-=-=- RESUMO -=-=-=-=-")

console.log(`Nome do usuário: ${computador.nome}`)
console.log(`Quantidade de problemas: ${computador.quantidadeProblemas}`)

for (let i = 0; i < computador.problemas.length; i++) {

    console.log(`Problema: ${identificarProblema(computador.problemas[i])}`)
    console.log(`Recomendação: ${recomendarManutencao(computador.problemas[i])}`)
}   

