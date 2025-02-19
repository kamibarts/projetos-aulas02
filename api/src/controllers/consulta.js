const con = require ('../connect');

const read = (req, res) =>{
    con.query('SELECT * FROM consulta', (err, reult) =>{
        if (err){
            res.status(500).json({ erro: err});
        }else{
            res.json(result);
        }
    })
}
module.exports = {read};