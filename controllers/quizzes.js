const router = require('express').Router()
const Quiz = require('../models/quiz')

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


module.exports = router