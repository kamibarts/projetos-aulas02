const express = require('express');

const routes = express.Router();

const mls = require('./controllers/mls');

routes.get('/', (req, res)=>{
    res.send('API  Respondendo!')
});

routes.post('/gastos', mls.create)
routes.get('/gastos', mls.read)
routes.put('/gastos/:id', mls.update)
routes.delete('/gastos/:id', mls.del)

module.exports = routes;
