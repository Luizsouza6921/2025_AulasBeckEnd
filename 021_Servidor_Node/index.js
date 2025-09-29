
const express = require('express');

const app = express();



app.get('/', (req, res) => {
    res.send('Bem-vindo ao Servidor Node.js com Express!');
});
app.get('/sobre', (req, res) => {
    res.send('Esta é a pagina sobre do projeto');

});

const usuarios = ['Mauro', 'Cristiano Ronaldo', 'Kabrinha', 'Nino'];
app.get('/usuarios', (req, res) => {
    let html = '<h1>Lista de Usuários </h1>';
    html += '<ul>'; //html = html  + '<ul>';

    for (let usuarioAtual of usuarios) {
        html += `<li>${usuarioAtual}</li>`;
    }
    html += '</ul>';
    res.send(html);
});


app.get('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const usuariosSel = usuarios[id];
    if (usuariosSel === undefined) {
        res.send('Usuário não encontrado');
    } else {
        res.send(`Voce Esta visualizando o perfil do ${id} -Seu nome é ${usuariosSel}`);
    }
});

app.get('/soma/:n1/:n2', (req, res) => {
    const n1 = Number(req.params.n1);
    const n2 = Number(req.params.n2);
    const resultado = n1 + n2;
    res.send(`${n1} + ${n2} = ${resultado}.`);
});

app.get('/menu', (req, res) => {
    let html = `
    
    <h1>Menu</h1>;

    <a href ="/">Pricipal</a> <br> 

    <a href ="/sobre">👀 sobre</a> <br>
   
    <a href ="/usuarios">Usuários</a> <br>
   
    <a href ="/usuario/1">Usuário 1</a> <br>

    <a href ="/usuario/7">Usuário Invalido</a> <br>

   <a href ="/soma/10/20">Soma</a> <br>
   `;
   res.send(html);
});

const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});


