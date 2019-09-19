import { userData, getUser } from '../routes/user'

const typeDefs = `
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
`

export default typeDefs

export const queryHandlers = `
  users(id: Int): [User]
`

export const queryResolvers = {
  users(root, args, context, info) {
    const { id } = args
    if (id) {
      const user = getUser(id)
      if (user) {
        return [user]
      } else {
        throw new Error(`Could not find user id ${id}`)
      }
    }
    return userData
  },
}
