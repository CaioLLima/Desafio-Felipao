class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    escrever() {
        console.log(`O herói ${this.nome} do tipo ${this.tipo} atacou usando ${this.ataque}.`)
    }

    verificaTipo() {
        if (this.tipo == "mago") {
            this.ataque = "magia"
            resultado.escrever()
        } else if (this.tipo == "guerreiro") {
            this.ataque = "espada"
            resultado.escrever()
        } else if (this.tipo == "monge") {
            this.ataque = "porrada"
            resultado.escrever()
        } else if (this.tipo == "ninja") {
            this.ataque = "assassinato"
            resultado.escrever()
        }
    }
}

let resultado = new hero("Vini", 25, "mago")

resultado.verificaTipo()