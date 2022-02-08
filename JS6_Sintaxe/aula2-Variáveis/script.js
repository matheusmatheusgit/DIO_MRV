// tipos primitivos

// boolean
var vOuf = false;
console.log(typeof(vOuf));

// number
var numeroqualquer = 1;
console.log(typeof(numeroqualquer));

// string
var nome = "Tequila";
console.log(typeof(nome));

// como declarar
var variavel = "Tequila";
variavel = "Bolinha";
console.log(variavel);

let variavel2 = "Tequila";
variavel2 = "Bolinha";
console.log(variavel2);

// gera erro: por isso comentada
// const constante = "Tequila";
// constante = "Bolinha";
// console.log(constante);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

escopoLocal();

// atribuição
var atribuição = "Tequila";

// comparação
var comparação = "0" == 0;
console.log(comparação);

// comparação identica
var comparaçãoIdentica = "0" === 0

// adição
var adição = 1 + 1;
console.log(adição);

// subtração
var subtração = 2 - 1;
console.log(subtração);

// multiplicação
var multiplicação = 2 * 3;
console.log(multiplicação);

// divisão
var divisão = 8 / 2;
console.log(divisão);

// potencialização
var potencialização = 2 ** 10;
console.log(potencialização);















