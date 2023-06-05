const mongoose = require('mongoose')
const config = require('../utils/config')

const url = config.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(res => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const quizSchema = mongoose.Schema({
  name: String,
  id: Number,
  description: String,
  showCorrectAnswers: Boolean,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  questions: [
    {
      question: String,
      id: Number,
      answers: [
        {
          id: Number,
          option: String
        }
      ],
      correct: {
        answer: String
      }
    }
  ]
})

quizSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    returnedObject.questions.map(q =>  {
      q.id = q._id.toString()
      delete q._id
      q.answers.map(a =>  {
        a.id = a._id.toString()
        delete a._id
      })
    })
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

module.exports = mongoose.model('Quiz', quizSchema)