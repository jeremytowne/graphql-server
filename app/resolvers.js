import { queryResolvers as userQueryResolvers } from './graphql/user'

export default {
  Query: {
    ...userQueryResolvers,
  },
}
