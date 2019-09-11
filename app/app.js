import express from 'express'
import morgan from 'morgan'
import hello from './routes/hello'

const app = express()
export default app

app.use(morgan('dev'))

app.use('/hello', hello)
