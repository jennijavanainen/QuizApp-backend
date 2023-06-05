const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('express-async-errors')
const quizzesRouter = require('./controllers/quizzes')
const usersRouter = require('./controllers/users')

mongoose.set('strictQuery', false)

mongoose.connect(config.MONGODB_URI)
  .then(res => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use('/api/quizzes', quizzesRouter)
app.use('/api/users', usersRouter)

module.exports = app