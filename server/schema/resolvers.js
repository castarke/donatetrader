const { Category, Items, Users } = require('../models');

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return Users.find();
    },

    getUserById: async (parent, { userId }) => {
      return Users.findOne({ _id: userId });
    },

    getAllItems: async () => {
      return Items.find();
    },

    getItemById: async (parent, { itemId }) => {
      return Items.findOne({ _id: itemId });
    },

    getAllCategories: async () => {
      return Category.find();
    },

    getCategoryById: async (parent, { categoryId }) => {
      return Category.findOne({ _id: categoryId });
    }
  },

  Mutation: {
    createUser: async (parent, { userId }) => {
      return Users.create({ 
        username:username,
        email:email,
        password:password,
        city:city,
        state:state,
        zip:zip});
    },

    updateUser: async (parent, {
      userId,
      email,
      password,
      city,
      state,
      zip,
      items }) => {
      return Users.findOneAndUpdate(
        {_id:userId},
        {$addToSet:{
          email:email,
          password:password,
          city:city,
          state:state,
          zip:zip,
          items:items
        }},
        {new: true}
    )},

    removeUser: async (parent, { userId }) => {
      return Users.findOneAndDelete({ _id: userId });
    },

    removeItem: async (parent, { itemId }) => {
      return Items.findOneAndDelete({ _id: itemId });
    },
  },
};

module.exports = resolvers;