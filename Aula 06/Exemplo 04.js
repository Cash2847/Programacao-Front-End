const produtos = [
  { id: 1, nome: 'Notebook', preco: 3500 },
  { id: 2, nome: 'Mouse', preco: 150 },
  { id: 3, nome: 'Teclado', preco: 300 },
];

// map — transforma cada item
const nomes = produtos.map(p => p.nome);
// ["Notebook", "Mouse", "Teclado"]

// filter — filtra itens
const caros = produtos.filter(p => p.preco > 200);
// [{ id: 1, ...}, { id: 3, ...}]

// find — encontra o primeiro que satisfaz
const notebook = produtos.find(p => p.nome === 'Notebook');

// reduce — acumula valores
const total = produtos.reduce((acc, p) => acc + p.preco, 0);
// 3950

console.log(caros)
console.log(nomes)
console.log(total)