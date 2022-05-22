//requisitando as bibliotecas os modulos instalados
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes')

//iniciar o servidor
const app = express()


app.use(morgan('dev')) //o Morgan adiciona o log de execução
app.use(bodyParser.urlencoded({ extended: false})) //
app.use(express.json()) //determina o tipo de dados usado
app.use(cors()) //
app.use(routes)

// Chamada do Servidor
app.listen(5000, () => {
    console.log('Servidor OK em http://localhost:5000')
})