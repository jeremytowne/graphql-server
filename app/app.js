import express from 'express'
import morgan from 'morgan'
import user from './routes/user'

const app = express()
export default app

app.use(morgan('dev'))

app.use('/user', user)
