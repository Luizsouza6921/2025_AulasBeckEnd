const aprovado = true;
let mensagem = '';
//modo no if tradicional
if (aprovado == true) {
    mensagem = 'Aprovado';
} else {
    mensagem = 'Reprovado';
}


//modo no if ternario
//condicao    ? se verdadeiro : se falso 
mensagem = (aprovado == true) ? 'Aprovado' : 'Reprovado';
