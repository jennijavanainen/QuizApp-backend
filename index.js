const express = require('express')
const app = express()
const cors = require('cors')
const Quiz = require('./models/quiz')

const config = require('./utils/config')
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send('<h1>Main page!</h1>')
})

app.get('/api/quizzes', (req, res) => {
  Quiz.find({}).then(quizzes => {
    res.json(quizzes)
  })
})

app.get('/api/quizzes/:id', (req, res) => {
  const id = Number(req.params.id)
  const quiz = quizzes.find(quiz => quiz.id === id)
  if (quiz) {
    res.json(quiz)
  } else {
    res.status(404).end()
  }
})

const PORT = config.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})