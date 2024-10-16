const express = require('express')
const app = express()
const conexao = require('./database.js')
const porra = require("./routes/vagasRoutes.js")

const a = async () => {
    try {
        await conexao.sync();
    } catch (err) {
        console.log(err)
    }
}


app.use(express.json())
app.use(porra)
a()

app.listen(6969, () => console.log('servidor rodando'))