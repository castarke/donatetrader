const { Category, Items, Users } = require('../models');

const resolvers = {
  Query: {
    getAllUsers: async () => {
      return Users.find();
    },

    getUserById: async (parent, { id }) => {
      console.log('kitties', id)
      return Users.findOne({ _id: id }).populate({
        path: 'items',
        model: 'items',
        populate: {
          path: 'owner',
          model: 'users'
        }
      })
      .exec()
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
    createUser: async (parent, data ) => {
      return Users.create(...data);
    },

    createItem: async (parent, { ownerId, desc, imagePath, value, donate, yearMade, model, serial, categoryIds, tradeForIds }) => {
      const newItem = await Items.create({
        owner: ownerId,
        desc,
        imagePath,
        value,
        donate,
        yearMade,
        model,
        serial,
        categories: categoryIds,
        tradeFor: tradeForIds,
        expire: null, // You can set the initial value for 'expire' field as per your requirement
        dateListed: new Date().toISOString() // You can set the initial value for 'dateListed' field as per your requirement
      });
    
      return newItem;
    },

    updateUser: async (parent, {userId, data})=> {
      return Users.findOneAndUpdate(
         { _id: userId },
         { $push: {...data} },
         { new: true }
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