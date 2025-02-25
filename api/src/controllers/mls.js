const con = require('../connect');

function create(req, res) {
    const { data, valor, descricao } = req.body;
    const sql = `INSERT INTO gastos (data, valor, descricao) VALUES ('${data}', '${valor}', '${descricao}')`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao cadastrar paciente');
        } else {
            res.status(201).json('paciente cadastrado com sucesso');
        }
    });
};

function read(req, res) {
    const sql = 'SELECT * FROM gastos';
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao consultar gastos');
        } else {
            res.status(200).json(result);
        }
    });
}

function update(req, res) {
    const { id } = req.params;
    const { data, valor, descricao } = req.body;
    const sql = `UPDATE gastos SET data = '${data}', valor= '${valor}', descricao = '${descricao}' WHERE gasto_id = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao alterar paciente');
        } else {
            res.status(202).json('Paciente alterado com sucesso');
        }
    });
}

function del(req, res) {
    const { id } = req.params;
    const sql = `DELETE FROM gastos WHERE gasto_id = ${id}`;
    con.query(sql, (error, result) => {
        if (error) {
            res.status(500).json('Erro ao excluir paciente');
        } else {
            res.status(204).json('Paciente excluído com sucesso');
        }
    });
}

module.exports = {
    create,
    read,
    update,
    del
}