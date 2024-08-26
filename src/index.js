let nomeHeroi = "Vinícius"
let xpQntd = 10000


if (xpQntd <= 1000) {
    let nivel = "Ferro"

} else if (xpQntd > 1000 && xpQntd < 2001) {
    nivel = "Bronze"
}
else if (xpQntd > 2000 && xpQntd < 5001) {
    nivel = "Prata"
}
else if (xpQntd < 5000 && xpQntd < 7001) {
    nivel = "Ouro"
}
else if (xpQntd < 7000 && xpQntd < 8001) {
    nivel = "Platina"
}
else if (xpQntd < 8000 && xpQntd < 9001) {
    nivel = "Ascendente"
}
else if (xpQntd < 9000 && xpQntd < 10001) {
    nivel = "Imortal"
}
else if (xpQntd >= 10000) {
    nivel = "Radiante"
}


console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel)