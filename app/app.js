import express from 'express'
import morgan from 'morgan'
import { ApolloServer } from 'apollo-server-express'
import user from './routes/user'
import resolvers from './resolvers'
import typeDefs from './schema'

const app = express()
export default app

app.use(morgan('dev'))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  context: context => context,
})
server.applyMiddleware({ app })

app.use('/user', user)
