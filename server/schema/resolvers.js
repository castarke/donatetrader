const { Category, Items, Users } = require('../models');
<<<<<<< HEAD
const {User}=require('../models');
const { signToken } = require('../utils/auth');
//const users=[];
=======

>>>>>>> 3f80cdb0e78bd06a6be88fafa5bdb3650ae6793b
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
    getAllUsers: async () => {
      return Users.find();
    },

<<<<<<< HEAD
    getUser: async (parent, { id }) => {
      return Users.findOne({ id: id })
=======
    getUserById: async (parent, { id }) => {
      return Users.findOne({ _id: id })
>>>>>>> 3f80cdb0e78bd06a6be88fafa5bdb3650ae6793b
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
      return Items.findOne({ _id: id })
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
    );
  },

    removeUser: async (parent, { userId }) => {
      return Users.findOneAndDelete({ _id: userId });
    },

    removeItem: async (parent, { itemId }) => {
      return Items.findOneAndDelete({ _id: itemId });
    },

<<<<<<< HEAD
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
=======
    signup:async(_,{name,email,password})=>{
      const user=new User({name,email,password});
      await user.save();
      return user;
    },
  },
};
>>>>>>> 3f80cdb0e78bd06a6be88fafa5bdb3650ae6793b

module.exports = resolvers;