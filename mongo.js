const mongoose = require('mongoose')
const config = require('./utils/config')

const url = config.MONGODB_URI
mongoose.connect(url)

const schema = mongoose.Schema({
  name: String,
  description: String,
  showCorrectAnswers: Boolean,
  questions: [
    {
      question: String,
      answers: [
        {
          option: String,
        }
      ],
      correct: {
        answer: String,
      }
    }
  ]
})

const Quiz = mongoose.model('Quiz', schema)

const quiz = new Quiz({
  "name": "Capital City Quiz",
  "description": "A quiz for testing your knowledge in capital cities",
  "showCorrectAnswers": false,
  "questions": [
    {
      "question": "What is the capital city of Indonesia?",
      "answers": [
        {
          "option": "Jakarta",
        },
        {
          "option": "Surabaya",
        },
        {
          "option": "Kuala Lumpur",
        },
        {
          "option": "Denpasar",
        }
      ],
      "correct": {
        "answer": "Jakarta"
      }
    },
    {
      "question": "What is the capital city of Bolivia?",
      "answers": [
        {
          "option": "La Paz",
        },
        {
          "option": "Quito",
        },
        {
          "option": "Bogota",
        },
        {
          "option": "Santa Cruz de la Sierra",
        }
      ],
      "correct": {
        "answer": "La Paz"
      }
    },
    {
      "question": "What is the capital city of Kenya?",
      "answers": [
        {
          "option": "Nairobi",
        },
        {
          "option": "Mombasa",
        },
        {
          "option": "Dar es Salaam",
        },
        {
          "option": "Kampala",
        }
      ],
      "correct": {
        "answer": "Nairobi"
      }
    },
    {
      "question": "What is the capital city of Oman?",
      "answers": [
        {
          "option": "Muscat",
        },
        {
          "option": "Sana'a",
        },
        {
          "option": "Doha",
        },
        {
          "option": "Al Ain",
        }
      ],
      "correct": {
        "answer": "Muscat"
      }
    },
    {
      "question": "What is the capital city of Japan?",
      "answers": [
        {
          "option": "Tokyo",
        },
        {
          "option": "Osaka",
        },
        {
          "option": "Sapporo",
        },
        {
          "option": "Seoul",
        }
      ],
      "correct": {
        "answer": "Tokyo"
      }
    },
    {
      "question": "What is the capital city of Serbia?",
      "answers": [
        {
          "option": "Belgrade",
        },
        {
          "option": "Sarajevo",
        },
        {
          "option": "Deva",
        },
        {
          "option": "Tirana",
        }
      ],
      "correct": {
        "answer": "Belgrade"
      }
    },
    {
      "question": "What is the capital city of Turkmenistan?",
      "answers": [
        {
          "option": "Ashgabat",
        },
        {
          "option": "Dushanbe",
        },
        {
          "option": "Khiva",
        },
        {
          "option": "Baku",
        }
      ],
      "correct": {
        "answer": "Ashgabat"
      }
    }
  ]
})

quiz.save().then(result => {
  console.log('quiz saved!')
  mongoose.connection.close()
})