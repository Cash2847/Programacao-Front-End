// Spread in Arrays - Espalhamento

const numeros = [1, 2, 3];
const maisNumeros = [...numeros, 4, 5];

// Spread em objetos (MUITOS UTILIZADO EM REACT)

const config = { tema: "dark", idioma: "pt-BR"};
const novaConfig = { ...config, idioma: "en-US"};

//Rest em Funções -> Recolher ou juntar varios elementos  soltos em um único array

const somar = (... numeros) => numeros.reduce((acc, n)=> acc + n,0);
somar(1, 2, 3, 4); //10

const mostrarAnimais