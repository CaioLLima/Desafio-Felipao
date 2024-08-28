
rankeamento(1000, 20)


function rankeamento(vitorias, derrotas) {

    saldoVitorias = vitorias - derrotas

    if (saldoVitorias <= 10) {
        let nivel = "Ferro"
        return console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível " + nivel)
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        let nivel = "Bronze"
        return console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível " + nivel)
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        let nivel = "Prata"
        return console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível " + nivel)
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        let nivel = "Ouro"
        return console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível " + nivel)
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        let nivel = "Diamante"
        return console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível " + nivel)
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        let nivel = "Lendário"
        return console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível " + nivel)
    } else if (saldoVitorias >= 101) {
        let nivel = "Imortal"
        return console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível " + nivel)
    }
}  