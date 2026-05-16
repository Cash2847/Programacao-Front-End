// Destructuring - Desestruturação

const usuario = {nome: "Ana", idade: 28, cidade: "São Paulo"};

const {nome, idade } = usuario;
console.log(nome);

// Arrays

const frutas = ["maça", "uva", "banana"];
const [primeira, segunda] = frutas;
console.log(primeira)

// Com Renomeação
// const nomeUsuario = "Joana";
// const { nome: nomeUsuario } = usuario;