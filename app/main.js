import app from './app'

const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || '3000'
const HOST = process.env.HOST || 'localhost'

app.listen(PORT, HOST, () => process.stdout.write(`Server is listening on ${PORT} (${NODE_ENV})\n`))
    .on('error', (err) => {
        process.stdout.write(`Error occurred ${err.message}\n`)
        setTimeout(() => process.exit(1), 5000)
    })
