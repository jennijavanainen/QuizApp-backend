const router = require('express').Router()
const Quiz = require('../models/quiz')

router.get('/api/quizzes', async(req, res) => {
  const quizzes = await Quiz
    .find({})

  res.json(quizzes)
})

module.exports = router