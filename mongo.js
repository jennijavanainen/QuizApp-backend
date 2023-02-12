const mongoose = require('mongoose')
const config = require('./utils/config')

const url = config.MONGODB_URI
mongoose.connect(url)

const schema = mongoose.Schema({
  name: String,
  description: String,
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
  "id": 1,
  "description": "A quiz for testing your knowledge in capital cities",
  "questions": [
    {
      "question": "What is the capital city of Indonesia?",
      "id": 1,
      "answers": [
        {
          "option": "Jakarta",
          "id": 1
        },
        {
          "option": "Surabaya",
          "id": 2
        },
        {
          "option": "Kuala Lumpur",
          "id": 3
        },
        {
          "option": "Denpasar",
          "id": 4
        }
      ],
      "correct": {
        "answer": "Jakarta"
      }
    },
    {
      "question": "What is the capital city of Bolivia?",
      "id": 2,
      "answers": [
        {
          "option": "La Paz",
          "id": 1
        },
        {
          "option": "Quito",
          "id": 2
        },
        {
          "option": "Bogota",
          "id": 3
        },
        {
          "option": "Santa Cruz de la Sierra",
          "id": 4
        }
      ],
      "correct": {
        "answer": "La Paz"
      }
    },
    {
      "question": "What is the capital city of Kenya?",
      "id": 3,
      "answers": [
        {
          "option": "Nairobi",
          "id": 1
        },
        {
          "option": "Mombasa",
          "id": 2
        },
        {
          "option": "Dar es Salaam",
          "id": 3
        },
        {
          "option": "Kampala",
          "id": 4
        }
      ],
      "correct": {
        "answer": "Nairobi"
      }
    },
    {
      "question": "What is the capital city of Oman?",
      "id": 4,
      "answers": [
        {
          "option": "Muscat",
          "id": 1
        },
        {
          "option": "Sana'a",
          "id": 2
        },
        {
          "option": "Doha",
          "id": 3
        },
        {
          "option": "Al Ain",
          "id": 4
        }
      ],
      "correct": {
        "answer": "Muscat"
      }
    },
    {
      "question": "What is the capital city of Japan?",
      "id": 5,
      "answers": [
        {
          "option": "Tokyo",
          "id": 1
        },
        {
          "option": "Osaka",
          "id": 2
        },
        {
          "option": "Sapporo",
          "id": 3
        },
        {
          "option": "Seoul",
          "id": 4
        }
      ],
      "correct": {
        "answer": "Tokyo"
      }
    },
    {
      "question": "What is the capital city of Serbia?",
      "id": 6,
      "answers": [
        {
          "option": "Belgrade",
          "id": 1
        },
        {
          "option": "Sarajevo",
          "id": 2
        },
        {
          "option": "Deva",
          "id": 3
        },
        {
          "option": "Tirana",
          "id": 4
        }
      ],
      "correct": {
        "answer": "Belgrade"
      }
    },
    {
      "question": "What is the capital city of Turkmenistan?",
      "id": 7,
      "answers": [
        {
          "option": "Ashgabat",
          "id": 1
        },
        {
          "option": "Dushanbe",
          "id": 2
        },
        {
          "option": "Khiva",
          "id": 3
        },
        {
          "option": "Baku",
          "id": 4
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