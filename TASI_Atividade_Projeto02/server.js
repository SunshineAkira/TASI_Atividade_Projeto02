const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/cardapio', (req, res) => {
    fs.readFile(path.join(__dirname, 'cardapio.html'), (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

app.get('/pedido', (req, res) => {
    fs.readFile(path.join(__dirname, 'pedido.html'), (err, data) => {
        if (err) {
            res.status(500).send("500 - Erro Interno do Servidor");
        } else {
            res.status(200).type('text/html').send(data);
        }
    });
});

const PORT = 1409;
app.listen(PORT, () => {
    console.log(`[OK] - Servidor executando em: ${PORT}`);
});
