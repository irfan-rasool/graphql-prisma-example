export default `
  type User {
    id: String!
    email: String
    name: String
    post: [String]
  }
   
  type Query {
    user(
      id: String,
      email: String
      ): [User]
  }

  type Mutation {
    createUser(
      email: String
      name: String
      ): Boolean! 
  }
`;