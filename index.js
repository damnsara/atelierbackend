const express = require('express')
const mongoose = require('mongoose')
const { restart } = require('nodemon')
const app = express()

const User = require('./models/User')

app.use(
    express.urlencoded({
        extended: true
    }),
)

app.use(express.json())

const userRoutes = require('./routes/userRoutes')

app.use('/user', userRoutes)

app.get('/', (req, res) => {
    res.send('API Funcionando')
})

const DB_USER = 'atelieradmin'
const DB_PASSWORD = encodeURIComponent('tis3admin')
//mongodb+srv://atelieradmin:tis3admin@atelierdb.2nvsz.mongodb.net/atelierBelMadeira?retryWrites=true&w=majority
mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@atelierdb.2nvsz.mongodb.net/atelierBelMadeira?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectado com sucesso");
        app.listen(3000)
    })
    .catch((err) => {
        console.log(err);
    })
