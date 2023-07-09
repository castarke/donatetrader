const { gql } = require('apollo-server-express');

const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!, $city: String!, $state: String!, $zip: Int!) {
    createUser(username: $username, email: $email, password: $password, city: $city, state: $state, zip: $zip) {
      _id
      username
      email
      city
      state
      zip
      items {
        _id
      }
    }
  }
`;

const UPDATE_USER = gql`
  mutation updateUser($userId: ID!, $username: String!, $email: String!, $password: String!, $city: String!, $state: String!, $zip: Int!) {
    updateUser(userId: $userId, username: $username, email: $email, password: $password, city: $city, state: $state, zip: $zip) {
      _id
      username
      email
      city
      state
      zip
      items {
        _id
      }
    }
  }
`;

const CREATE_ITEM = gql`
  mutation createItem($ownerId: ID!, $desc: String!, $imagePath: String, $value: Float, $donate: Boolean, $yearMade: Int!, $model: String, $serial: String, $categoryIds: [ID!]!, $tradeForIds: [ID!]) {
    createItem(ownerId: $ownerId, desc: $desc, imagePath: $imagePath, value: $value, donate: $donate, yearMade: $yearMade, model: $model, serial: $serial, categoryIds: $categoryIds, tradeForIds: $tradeForIds) {
      _id
      owner {
        _id
        username
        email
      }
      desc
      imagePath
      value
      donate
      yearMade
      model
      serial
      categories {
        _id
        category
      }
      tradeFor {
        _id
        category
      }
      expire
      dateListed
    }
  }
`;

const UPDATE_ITEM = gql`
  mutation updateItem($itemId: ID!, $desc: String, $imagePath: String, $value: Float, $donate: Boolean, $yearMade: Int, $model: String, $serial: String, $categoryIds: [ID!], $tradeForIds: [ID!]) {
    updateItem(itemId: $itemId, desc: $desc, imagePath: $imagePath, value: $value, donate: $donate, yearMade: $yearMade, model: $model, serial: $serial, categoryIds: $categoryIds, tradeForIds: $tradeForIds) {
      _id
      owner {
        _id
        username
        email
      }
      desc
      imagePath
      value
      donate
      yearMade
      model
      serial
      categories {
        _id
        category
      }
      tradeFor {
        _id
        category
      }
      expire
      dateListed
    }
  }
`;

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
    }
  }
`;

const SIGNUP_USER=gql`
  mutation Signup($email:String!, $password:String!, $name:String!){
    signup(email:$email, password:$password, name:$name){
      _id
      name
      email
    }
  }
`;

module.exports = {
  CREATE_USER,
  UPDATE_USER,
  CREATE_ITEM,
  UPDATE_ITEM,
  LOGIN_USER,
  SIGNUP_USER
};
