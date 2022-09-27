const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h2>To do list</h2>')
})

app.listen(3000)
    console.log('Servidor rodando na porta: http://localhost:3000')
