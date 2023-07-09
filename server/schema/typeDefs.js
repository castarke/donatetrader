const { gql } = require('apollo-server-express');

const typeDefs = gql`

scalar Date

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
    categories: [Category]
    tradeFor: [Category]
    expire: Int
    dateListed: Date
  }
  
  type Category {
    _id: ID!
    category: String!
  }
  
  type Query {
    getAllUsers: [User!]!
    getUserById(id: ID!): User!
    getAllItems(last:Int): [Item]
    getItemById(id: ID!): Item 
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

    createItem(
      ownerId: ID!
      desc: String!
      imagePath: String
      value: Float
      donate: Boolean
      yearMade: Int!
      model: String
      serial: String
      categoryIds: [ID!]!
      tradeForIds: [ID!]
    ): Item

    removeUser(id : ID!) : User
    removeItem(id : ID!) : Item
    signup(email:String!,password:String!,name:String!):User!
  }
  `
  module.exports = typeDefs;