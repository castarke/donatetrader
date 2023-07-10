const { Category, Items, Users } = require('../models');
const {User}=require('../models');
const { signToken } = require('../utils/auth');
//const users=[];
const resolvers = {

  Date: {
    // Resolver function for the Date scalar type
    resolve: (date) => {
      // Format the date value as "dd/mm/yyyy"
      const formattedDate = date.toLocaleDateString("en-GB");
      return formattedDate;
    },
  },


  Query: {
    users:() => users,

    // getUser: (parent, { id }) => {
    //   return Users.findOne(user => user.id === id);
    // },

    getAllUsers: async () => {
      return Users.find();
    },

    getUser: async (parent, { id }) => {
      return Users.findOne({ id: id })
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
        return Items.find().limit(first).sort({dateListed: -1});
      }
      return Items.find();
    },

    getItemById: async (parent, { id }) => {
      return Items.findOne({ _id: id });
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

    signup: async (parent, { username, email,password }) => {
      // Perform server-side validation
      //const errors = {};

      // // Check if username is already taken
      // const existingUsername = await User.findOne({ username });
      // if (existingUsername) {
      //   errors.username = 'Username is already taken';
      // }

      // // Check if email is already registered
      // const existingEmail = await User.findOne({ email });
      // if (existingEmail) {
      //   errors.email = 'Email is already registered';
      // }

      // // If there are validation errors, throw an error with the error object
      // if (Object.keys(errors).length > 0) {
      //   throw new Error(JSON.stringify(errors));
      // }

      // Create the new user
      // const newUser = {
      //   id: String(users.length + 1),
      //   usernamec,
      //   email,
      // };
      // users.push(newUser);
      // return newUser;

      const newUser = await Users.create({ username, email, password });
      const savedUser = await newUser.save();
      const token=signToken(savedUser)
      return {savedUser,token};
    },

    loginUser: async (_, { username, password }) => {
      // e.g., check if username and password are provided

      if (!username || !password) {
        throw new Error('Please provide a username and password');
      }

      // Find the user by username
      const user = await User.findOne({ username });

      // Handle user not found or incorrect password
      if (!user || !user.verifyPassword(password)) {
        throw new Error('Invalid username or password');
      }

      // Return the authenticated user
      return user;
    }
    }
  };


module.exports = resolvers;
