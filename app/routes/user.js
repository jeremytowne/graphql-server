import express from 'express'

const app = express.Router()

export const userData = [
    {
        id: 1,
        firstName: 'Bob',
        lastName: 'Biggs',
        vitals: {
            temperature: '98.6',
            pulse: '70'
        }
    },
    {
        id: 2,
        firstName: 'Jimmy',
        lastName: 'Jacobs',
        vitals: {
            temperature: '98.5',
            pulse: '85'
        }
    }
]

export const getUser = id => userData.find(user => user.id === id)

app.get('/', (req, res) => res.send(userData))
app.get('/:id', (req, res) => {
    const user = getUser(parseInt(req.params.id))
    if(user) {
        res.send(user)
    } else {
        res.sendStatus(404)
    }
})

export default app
