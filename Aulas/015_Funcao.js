const prompt = require('prompt-sync')();
function BemVindo() {
    console.log('❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤');
    console.log('Bem vindo a UC Back-end!');
    console.log('❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤');
}

for (let i = 1; i <= 10; i++) {
    BemVindo();

}
function soma(a, b) {
    return a + b;
}

let num1 = parseFloat(prompt('Digite um número: '));
let num2 = parseFloat(prompt('Digite outro número: '));

let resultado = soma(num1, num2);
console.log(`A soma de ${num1} e ${num2} é ${resultado}.`);

