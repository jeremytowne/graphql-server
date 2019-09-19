import { gql } from 'apollo-server-express'
import userTypeDefs, {
  queryHandlers as userQueryHandlers,
} from './graphql/user'

const typeDefs = gql`
    ${userTypeDefs}
    
    type Query {
        ${userQueryHandlers}
    }
`

export default typeDefs
