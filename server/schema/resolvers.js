const { Category, Items, Users } = require('../models');

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return Users.find();
    },

    getUserById: async (parent, { id }) => {
      return Users.findOne({ _id: id })
        .populate({
          path: 'items',
          model: 'items',
          populate: {
            path: 'owner',
            model: 'users'
          }
        })
        .exec();
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
    createUser: async (parent, { username, email, password, city, state, zip }) => {
      return Users.create({ 
        username,
        email,
        password,
        city,
        state,
        zip
      });
    },

    updateUser: async (parent, { userId, username, email, password, city, state, zip, items }) => {
      return Users.findOneAndUpdate(
        {_id: userId},
        {
          username,
          email,
          password,
          city,
          state,
          zip,
          items
        },
        {new: true}
      );
    },

    removeUser: async (parent, { userId }) => {
      return Users.findOneAndDelete({ _id: userId });
    },

    removeItem: async (parent, { itemId }) => {
      return Items.findOneAndDelete({ _id: itemId });
    },
  },
};

module.exports = resolvers;
