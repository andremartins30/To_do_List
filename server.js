const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const morgan = require('morgan')

const app = express()

//handlebars
const hbs = exphbs.create({
    partialsDir: ['views']
})
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')


//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

//static files
app.use(express.static(path.join(__dirname, 'public')))


//routes
app.use(require('./routes/task.routes'))

module.exports = app;