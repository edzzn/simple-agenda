const express = require('express')
const path = require('path')
const indexRouter = require('./routers/indexRouter')

const app = express()
const port = 3000
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Static files folder
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)

app.listen(port, () => console.log(`Ejecutando http://localhost:${port}`))
