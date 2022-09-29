const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn.js')

const app = express()

const taskRoutes = require('./routes/taskRoutes')

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))

app.use('/tasks', taskRoutes)

app.listen(3000)
    console.log('Servidor rodando na porta: http://localhost:3000/tasks')
