const { Category, Items, Users } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Date: {
    resolve: (date) => {
      const formattedDate = date.toLocaleDateString("en-GB");
      return formattedDate;
    },
  },

  Query: {
    getDonations: async ()=>{
      try {
        const donations = await Items.find({donate:true});
        return donations;
      } catch (error) {
        throw new Error('No Items Found!');
      }
    },

    searchBy: async (_, { searchCriteria }) => {
      const { searchText, categories, value } = searchCriteria;
      let query = {};
      if (searchText) {
        query.desc = { $regex: searchText, $options: 'i' };
      }
  
      if (categories && categories.length > 0) {
        query.categories = { $in: categories };
      }

      if (value){
        const [minPrice, maxPrice] = value.split("-");
        query.value = { $gte: minPrice, $lte: maxPrice };
      }
  
      try {
        const searchResults = await Items.find(query);
        return searchResults;
      } catch (error) {
        throw new Error('No Items Found!');
      }
    },
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
    getAllItems: async (_, { first }) => {
      if (first) {
        return Items.find().limit(first).sort({ dateListed: -1 });
      }
      return Items.find();
    },
    getItemById: async (parent, { id }) => {
      return Items.findOne({ _id: id })
        .populate({
          path: 'owner',
          model: 'users',
        })
        .populate('categories')
        .populate('tradeFor');
    },
    getItemByOwner: async (parent, { owner }) => {
      return Items.find({ owner }).sort({ dateListed: -1 })
        .populate({
          path: 'owner',
          model: 'users',
        })
        .populate('categories')
        .populate('tradeFor');
    },
    getAllCategories: async () => {
      return Category.find();
    },
    getCategoryById: async (parent, { categoryId }) => {
      return Category.findOne({ _id: categoryId });
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password, city, state, zip }) => {
      console.log('Creating a new user...');
      return Users.create({ username, email, password, city, state, zip });
    },
    createItem: async (parent, { owner, desc, imagePath, value, donate, yearMade, model, serial, categories, tradeFor }) => {
      const newItem = await Items.create({
        owner,
        desc,
        imagePath,
        value,
        donate,
        yearMade,
        model,
        serial,
        categories: categories,
        tradeFor: tradeFor,
        expire: null,
        dateListed: new Date().toISOString()
      });

      await Users.findOneAndUpdate(
        { _id: owner },
        { $push: { items: newItem._id } }
      );

      return newItem;
    },
    updateUser: async (parent, { userId, data }) => {
      return Users.findOneAndUpdate(
        { _id: userId },
        { $push: { ...data } },
        { new: true }
      );
    },
    updateItem: async (parent, { _id, desc, imagePath, value, donate, yearMade, model, serial, categories, tradeFor }) => {
      return Items.findOneAndUpdate(
        { _id: _id },
        {
          desc,
          imagePath,
          value,
          donate,
          yearMade,
          model,
          serial,
          categories,
          tradeFor,
        },
        { new: true }
      )
      .populate('categories')
      .populate('tradeFor');
    },
    removeUser: async (parent, { userId }) => {
      return Users.findOneAndDelete({ _id: userId });
    },
    removeItem: async (parent, { itemId }) => {
      return Items.findOneAndDelete({ _id: itemId });
    },
    signup: async (parent, { username, email, password, city, state, zip }) => {
      const user = await Users.create({ username, email, password, city, state, zip });
      const token = signToken(user);

      if (!token) {
        throw new Error("Token generation failed.");
      }

      return { token, user };
    },
    loginUser: async (parent, { username, password }) => {
      const user = await Users.findOne({ username });

      if (!user) {
        throw new Error('User not found');
      }

      const correctPassword = await user.isCorrectPassword(password);

      if (!correctPassword) {
        throw new Error('Incorrect password');
      }

      const token = signToken(user);

      if (!token) {
        throw new Error('Token generation failed');
      }

      return { token, user };
    },
  },
};

module.exports = resolvers;
