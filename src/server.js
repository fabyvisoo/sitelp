
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Rota principal entrega o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/index.html'));
});

// Outras rotas HTML (opcional)
app.get('/creatina', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/creatina.html'));
});
app.get('/whey', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/whey.html'));
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
