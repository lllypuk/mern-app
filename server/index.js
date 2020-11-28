const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const appMovie = express()
const apiPort = 3000

appMovie.disable("x-powered-by");
appMovie.use(bodyParser.urlencoded({extended: true}))
appMovie.use(cors())
appMovie.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

appMovie.use('/api', movieRouter)

appMovie.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
