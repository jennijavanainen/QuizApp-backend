const router = require('express').Router()
const Quiz = require('../models/quiz')
const jwt = require('jsonwebtoken')
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
  const { name, description, showCorrectAnswers, questions, creator } = req.body
  const decodedToken = jwt.verify(creator.token, process.env.SECRET)
  const user = await User.findById(decodedToken.id)

  const quiz = new Quiz({
    name,
    description,
    showCorrectAnswers,
    creator: user._id,
    questions
  })

  console.log(quiz)

  const savedQuiz = await quiz.save()

  res.status(201).json(savedQuiz)

})


module.exports = router