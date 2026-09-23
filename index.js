const espacoTotal = 476
const espacoUsado = 100
const espacoLivre = (espacoTotal - espacoUsado)
const espacolivreporcentagem = (espacoLivre / espacoTotal) * 100


const ramTotal = 8
const ramUsada = 6.9
const ramUsoPorcentagem = (ramUsada / ramTotal) * 100


const diaLimpeza = 70
const diaAntivirus = 60
const bateria = 45


let recomendacaoDisco
let recomendacaoLimpeza
let recomendacaoUsoRam
let recomendacaoAntivirus
let recomendacaoBateria



if (espacolivreporcentagem <=10){
    recomendacaoDisco = "Disco quase cheio⚠️  " + espacoLivre + "GB livres de " + espacoTotal + "GB"
} else if (espacolivreporcentagem <= 25) {
    recomendacaoDisco = "Pouco espaço no disco‼‼️  " + espacoLivre + "GB de " + espacoTotal + "GB"
} else {
    recomendacaoDisco = "Disco ok✅ " + espacoLivre + "GB livres"
}
if (diaLimpeza >=30){
    recomendacaoLimpeza = "Já fazem " + diaLimpeza + " dias sem limpar o PC⚠️"
} else {
    recomendacaoLimpeza = "Limpeza feita a " + diaLimpeza + " dias atras"
}
if (ramUsoPorcentagem >= 90) {
recomendacaoUsoRam = "RAM no limite  " + ramUsada + "GB de " + ramTotal + "GB usados ⚠️"
} else if (ramUsoPorcentagem >= 75) {
    recomendacaoUsoRam = "RAM meio alta  " + ramUsada + "GB de " + ramTotal + "GB ⚠️"
} else {
    recomendacaoUsoRam = "RAM OK✅  " + ramUsada + "GB de " + ramTotal + "GB"
}
 if (bateria <=30) {
    recomendacaoBateria = "Bateria em " + bateria + "%, conecte ao carregador⚠️"
 } else if (bateria <= 50) {
    recomendacaoBateria = "Bateria em " + bateria + "%, metade, considere carregar posteriormente⚠️"
 } else {
    recomendacaoBateria = "Bateria em " + bateria + "%, bateria ok✅"
 }
 if (diaAntivirus >=20) {
    recomendacaoAntivirus = "Faz " + diaAntivirus + " dias que não roda o antivirus⚠️"
 } else {
    recomendacaoAntivirus = "Antivirus OK✅"
 }

const resumo = (
    `
//////////////////////////////////////////////////
RECOMENDAÇÕES:

${recomendacaoDisco}
${recomendacaoUsoRam}
${recomendacaoLimpeza}
${recomendacaoAntivirus}
${recomendacaoBateria}

//////////////////////////////////////////////////
    `)



console.log(resumo)