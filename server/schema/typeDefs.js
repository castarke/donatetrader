const { gql } = require('apollo-server-express');

const typeDefs = gql`

scalar Date

input SearchCriteria{
  searchText: String
  categories: [ID]
}

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    city: String
    state: String
    zip: String
    items: [Item]
  }
  
  type Item {
    _id: ID!
    owner: User!
    desc: String!
    imagePath: String
    value: Float
    donate: Boolean
    yearMade: String!
    model: String
    serial: String
    categories: [Category]
    tradeFor: [Category]
    expire: Int
    dateListed: Date
  }
  
  type Category {
    _id: ID!
    name: String!
    category: Category!
  }
  
  type Auth{
    token:ID!
    user:User
  }

  type Query {
    searchBy(searchCriteria: SearchCriteria!): [Item]
    getAllUsers: [User!]!
    getUserById(id: ID!): User!
    getAllItems(first:Int): [Item]
    getItemById(id: ID!): Item 
    getItemByOwner(owner : ID!):[Item]
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
      zip: String!,
    ) : User

    updateUser(
      _id: ID!,
      username: String!,
      email: String!,
      password: String!,
      city: String!,
      state: String!,
      zip: String!,
      items: [ID!]!,
    ) : User

    createItem(
      owner: ID!
      desc: String!
      imagePath: String
      value: Float
      donate: Boolean
      yearMade: Int!
      model: String
      serial: String
      categories: [ID]
      tradeFor: [ID]
    ): Item

    updateItem(
      _id: ID!
      owner: ID!
      desc: String!
      imagePath: String
      value: Float
      donate: Boolean
      yearMade: Int!
      model: String
      serial: String
      categories: [ID]
      tradeFor: [ID]
    ): Item
    
    removeUser(id : ID!) : User
    removeItem(id : ID!) : Item
    signup(username:String!, email:String!, password:String!, city: String!, state:String!, zip:String!):Auth
    loginUser(password:String!,username:String!):Auth
  }
  `
  module.exports = typeDefs;