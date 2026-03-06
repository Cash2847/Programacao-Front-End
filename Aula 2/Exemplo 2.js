function Pessoa(nome, idade, genero) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.nacionalidade = "Brasileiro"
}

const pessoa1 = new Pessoa("Lorenzo", 20, "M" )
console.log(pessoa1.nacionalidade)