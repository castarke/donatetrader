const GET_ME = gql`
  query {
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

const GET_ALL_ITEMS = gql`
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

const GET_CATEGORY_BY_ID = gql`
  query getCategoryById($id: ID!) {
    getCategoryById(id: $id) {
      _id
      category
    }
  }
`;

const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      _id
      category
    }
  }
`;

const GET_ITEM_DETAILS = gql`
  query {
    getAllCategories {
      _id
      category
    }
  }
`;

module.exports = {
  GET_ME,
  GET_ALL_ITEMS,
  GET_CATEGORY_BY_ID,
  GET_ALL_CATEGORIES,
  GET_ITEM_DETAILS
};
