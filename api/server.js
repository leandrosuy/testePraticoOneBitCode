const express = require('express');
const cors = require('cors');
const app = express();
const rotas = require('./routes/index')

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use(rotas);

app.listen(3000, () => {
    console.log('Servidor rodando...');
});