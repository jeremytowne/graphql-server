import express from 'express'

const app = express.Router()

const userData = [
  {
    id: 1,
    firstName: 'Bob',
    lastName: 'Biggs',
    vitals: {
      temperature: '98.6',
      pulse: '70',
    },
  },
  {
    id: 2,
    firstName: 'Jimmy',
    lastName: 'Jacobs',
    vitals: {
      temperature: '98.5',
      pulse: '85',
    },
  },
]

app.get('/', (req, res) => res.send(userData))
app.get('/:id', (req, res) => {
  const user = userData.find(user => user.id === parseInt(req.params.id))
  if (user) {
    res.send(user)
  } else {
    res.sendStatus(404)
  }
})

export default app
