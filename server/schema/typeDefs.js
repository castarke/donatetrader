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
    getUserById(id: ID!): User
    getAllItems: [Item!]!
    getCategoryById(id: ID!): Category
    getAllCategories: [Category!]!
  }
  `
  module.exports = typeDefs;