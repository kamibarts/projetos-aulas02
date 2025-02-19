const express = require('express');
const cors = require('cors');
const app = express();

const rotas = require('./src/routes');

app.use(cors());
app.use(express.json());
app.use(rotas);

app.listen(4000, () => {
    console.log('servider respondendo na porta 4000');
});