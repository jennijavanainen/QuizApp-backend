const router = require('express').Router()
const Quiz = require('../models/quiz')
const User = require('../models/user')

router.get('/', async(req, res) => {
  const quizzes = await Quiz
    .find({})
  res.json(quizzes)
})

router.get('/api/quizzes/:id', async (req, res) => {
  const quiz = await Quiz.findById(req.params.id)
  if (!quiz) {
    res.status(404).end()
  }
  res.json(quiz)
})

router.post('/', async (req,res) => {
  const { name, description, showCorrectAnswers, creator, questions } = req.body

  const quiz = new Quiz({
    name,
    description,
    showCorrectAnswers,
    creator,
    questions
  })

  const savedQuiz = await quiz.save()

  res.status(201).json(savedQuiz)


})


module.exports = router