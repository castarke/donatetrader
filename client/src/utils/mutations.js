import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!, $city: String!, $state: String!, $zip:String!) {
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

export const UPDATE_USER = gql`
  mutation updateUser($userId: ID!, $username: String!, $email: String!, $password: String!, $city: String!, $state: String!, $zip: String!) {
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

export const CREATE_ITEM = gql`
mutation createItem(
  $owner: ID!,
  $desc: String!,
  $imagePath: String,
  $value: Float,
  $donate: Boolean,
  $yearMade: Int!,
  $model: String,
  $serial: String,
  $categories: [ID],
  $tradeFor: [ID]
) {
  createItem(
    owner: $owner,
    desc: $desc,
    imagePath: $imagePath,
    value: $value,
    donate: $donate,
    yearMade: $yearMade,
    model: $model,
    serial: $serial,
    categories: $categories,
    tradeFor: $tradeFor
  ) {
    _id
    desc
    imagePath
    value
    donate
    yearMade
    model
    serial
    expire
    dateListed
    categories{_id}
    tradeFor{_id}
  }
}
`;


export const UPDATE_ITEM = gql`
mutation updateItem($itemId: ID!, $owner:ID!, $desc: String!, $imagePath: String, $value: Float, $donate: Boolean, $yearMade: Int, $model: String, $serial: String, $categories: [ID], $tradeFor: [ID]) {
  updateItem(_id: $itemId, owner:$owner, desc: $desc, imagePath: $imagePath, value: $value, donate: $donate, yearMade: $yearMade, model: $model, serial: $serial, categories: $categories, tradeFor: $tradeFor) {
    _id
    owner{_id}
    desc
    imagePath
    value
    donate
    yearMade
    model
    serial
    categories {
      _id
      name
    }
    tradeFor {
      _id
      name
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
    }
  }
`;


export const SIGNUP_USER = gql`
  mutation signup($username: String!, $email: String!, $password: String!, $city: String!, $state: String!, $zip: String!) {
    signup(username: $username, email: $email, password: $password, city: $city, state: $state, zip: $zip) {
      token
      user {
        _id
        username
        email
        city
        state
        zip
      }
    }
  }
`;
