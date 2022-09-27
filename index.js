const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn.js')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
    res.send('<h2>To do list</h2>')
})

app.use(express.static('public'))


app.listen(3000)
    console.log('Servidor rodando na porta: http://localhost:3000')
