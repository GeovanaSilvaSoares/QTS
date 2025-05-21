const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
const { calcular } = require('./calc.js');


app.use(cors(
    {
        origin:'*'
    }
));

app.use(express.json())

app.use(

    express.urlencoded({
        extended: true
    })
)


app.get("/", (req, res, next) => {
    res.json({mensagem: 'Está funcionando!'});
});

app.post("/calcular", (req, res) => {
    try {
        const resultado = calcular(req.body.expressao);
        res.json({ resultado });
    } catch (error) {
        res.status(400).json({ erro: "Expressão inválida" });
    }
});


app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(5000, ()=>{console.log("Funcionando na porta 5000")})