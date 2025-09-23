const prompt = require("prompt-sync")();

let valor = prompt("Digite o valor da venda:");
let percComissao = prompt("Digite a porcentagem da comissão:");

function calcularComissao(valor, percComissao) {
    let comissao = (valor * percComissao) / 100;
    return comissao;
}

let valorComissao = calcularComissao(valor, percComissao);
console.log(valorComissao); 