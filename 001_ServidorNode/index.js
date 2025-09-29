const express = require('express');

const app = express();



app.get('/', (req, res) => {
    res.send('Bem-vindo ao Site Principal!');
});
const produtos = ['Notebook', 'Mouse', 'Teclado'];
app.get('/produtos', (req, res) => {
    let html = '<h1>Lista de Produtos </h1>';
    html += '<ul>'; //html = html  + '<ul>';
    
    for (let produtoAtual of produtos) {
        html += `<li>${produtoAtual}</li>`;
    }
    html += '</ul>';
    res.send(html);
    
    
});
app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    const produtosSel = produtos[id];
    if (produtosSel === undefined) {
        res.send('Produto não encontrado');
    } else {
        res.send(`Voce Esta visualizando o ${id} o produto é ${produtosSel}`);
    }
});

app.get('/menu', (req, res) => {
    let html = `
    
    <h1>Menu</h1>

    <a href ="/"> Pricipal</a> <br> 
   
    <a href ="/produtos">Produtos</a> <br>
   
    <a href ="/produtos/1">Produto 1</a> <br>

    <a href ="/produtos/7">Produto Inexistente</a> <br>

   `;
   res.send(html);
});

app.get('/total/:id_produto/:preco/:qtde', (req, res) => {
    const id = req.params.id_produto;
    const preco = req.params.preco;
    const qtde = req.params.qtde;
    const total = preco * qtde;
    res.send(`O produto ${id} tem um total de ${total}`);
});


const porta = 3000;
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

