const express = require('express');
const routes = express.Routes();

const Consulta = require('./controllers/consulta');

routes.get('/', (req, res) => {
    res.json({ titulo: ' Clínica CHEL ' })
});

module.exports = routes;