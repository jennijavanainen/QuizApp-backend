const bcrypt = require('bcrypt')
const router = require('express').Router()
const User = require('../models/user')

router.get('/', async (request, response) => {
  const users = await User
    .find({})
    .populate('quizzes', { creator: 1 })
  response.json(users)
})

router.post('/', async (request, response) => {
  const { username, name, password } = request.body
  console.log()
  if (!password || password.length < 8) {
    return response.status(400).json({
      error: 'password must be at least 8 characters'
    })
  }

  const existingUser = await User.findOne({ username })
  if (existingUser) {
    return response.status(400).json({
      error: 'username must be unique'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

module.exports = router