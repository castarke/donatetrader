import { gql } from '@apollo/client';

export const GET_DONATIONS = gql`
query {
  getDonations{
    _id
  }
}
`;

export const SEARCH_BY = gql`
query searchBy($searchCriteria: SearchCriteria!) {
  searchBy(searchCriteria: $searchCriteria) {
    _id
  }
}
`;

export const GET_ME = gql`
  query ($userId: ID!) {
    getUserById(id: $userId) {
      _id
      username
      email
      password
      city
      state
      zip
      items {
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
        }
        tradeFor {
          _id
        }
        expire
        dateListed
      }
    }
  }
`;

export const GET_ALL_ITEMS = gql`
  query {
    getAllItems {
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
      }
      expire
      dateListed
    }
  }
`;

export const GET_ITEM_BY_ID = gql`
query getItemById($id: ID!) {
  getItemById(id: $id) {
    _id
    owner{
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
    expire
    dateListed
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

export const MY_ITEMS = gql`
query getItemByOwner($owner: ID!) {
  getItemByOwner(owner: $owner) {
    _id
  }
}
`;
export const GET_Latest_9 = gql`
  query {
    getAllItems(first: 9) {
      _id
    }
  }
`;


export const GET_CATEGORY_BY_ID = gql`
  query getCategoryById($id: ID!) {
    getCategoryById(id: $id) {
      _id
      category
    }
  }
`;

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      _id
      name
    }
  }
`;

export const GET_NOTIFICATIONS = gql`
  query GetNotifications {
    notifications {
      id
      message
      createdAt
    }
  }
`;

export const GET_USER_ITEMS = gql`
  query GetUserItems($userId: ID!) {
    getUserById(id: $userId) {
      items {
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
  }
`;
