let variavelGlobal = 'Eu sou global';

function minhaFuncao() {
    let variavelLocal = 'Eu sou local';
    console.log(variavelLocal);     // Acessa a variável local  
    console.log(variavelGlobal);    // Acessa a variável global

}
minhaFuncao();

console.log(variavelGlobal);        // Acessa a variável global
console.log(variavelLocal);      // ERRO! Não acessa a variável local