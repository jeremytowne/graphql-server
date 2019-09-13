import express from 'express'
import morgan from 'morgan'
import { ApolloServer, gql } from 'apollo-server-express'
import user, { userData } from './routes/user'

const app = express()
export default app

app.use(morgan('dev'))

const typeDefs = gql`
    type User {
        id: Int
        firstName: String
        lastName: String
        vitals: Vitals
    }
    
    type Vitals {
        temperature: String
        pulse: String
    }
    
    type Query {
        user: [User]
    }
`

const resolvers = {
    Query: {
        user(root, args, context, info) {
            return userData
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    context: context => context,
})
server.applyMiddleware({ app })

app.use('/user', user)
