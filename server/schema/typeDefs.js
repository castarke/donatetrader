const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    city: String!
    state: String!
    zip: Int!
    items: [Item!]!
  }
  
  type Item {
    _id: ID!
    owner: User!
    desc: String!
    imagePath: String
    value: Float
    donate: Boolean
    yearMade: Int!
    model: String
    serial: String
    categories: [Category!]!
    tradeFor: [Category!]!
    expire: Int
    dateListed: String!
  }
  
  type Category {
    _id: ID!
    category: String!
  }
  
  type Query {
    getAllUsers: [User!]!
    getUserById(id: ID!): User
    getAllItems: [Item!]!
    getItemById(id: ID!): [Item!]! 
    getCategoryById(id: ID!): Category
    getAllCategories: [Category!]!
  }

  type Mutation {
    createUser(
      username: String!,
      email: String!,
      password: String!,
      city: String!,
      state: String!,
      zip: Int!,
    ) : User

    createItem(
        _id: ID!,
        owner: User!,
        desc: String!,
        imagePath: String,
        value: Float,
        donate: Boolean,
        yearMade: Int!,
        model: String,
        serial: String,
        categories: [Category!]!,
        tradeFor: [Category!]!,
        expire: Int,
        dateListed: String!,
    ) : Item

    updateUser(
      _id: ID!,
      username: String!,
      email: String!,
      password: String!,
      city: String!,
      state: String!,
      zip: Int!,
      items: [ID!]!,
    ) : User

    removeUser(id : ID!) : User
    removeItem(id : ID!) : Item
  }
  `
  module.exports = typeDefs;