// Método -. Eu trago um comportamento para a classe (objeto)

class Cachorro{
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
    Latir() {
        return console.log(`O cachorro de nome ${this.nome} latiu!`);
    }
}

var cachorro1 = new Cachorro("Fiona", "Vira Lata");
console.log(cachorro1);
cachorro1.Latir()