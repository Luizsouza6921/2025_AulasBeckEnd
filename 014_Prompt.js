const prompt = require('prompt-sync')();

let nome = prompt('Qual o seu nome? ');
console.log(`Seja bem-vindo(a), ${nome}!`);

let anoNascimento = prompt('Qual o seu ano de nascimento? ');
let idade = 2025 - parseInt(anoNascimento);

let fezAniversario = prompt('Você já fez aniversário esse ano? (s/n) ');
if (fezAniversario != 's') {
    idade--;
}
console.log(`Sua idade é ${idade}.`);