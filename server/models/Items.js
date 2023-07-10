const { Schema, model } = require('mongoose');

const ItemSchema = new Schema(
  {
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Users',
      },

    desc: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    }, 

    imagePath: {
      type: String,
    },
    
    value: {
      type: Number,
    },

    donate: {
      type: Boolean
    },
    
    yearMade: {
      type: Number,
      required: true,
    },

    model:{
      type: String
    },

    serial: {
      type: String
    },

    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],

    tradeFor: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Category',
      },
    ],

    expire: {
      type: Number
    },
    
    dateListed: {
      type: Date,
      default: Date.now,
      get: function (dateListed) {
        const options = {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        };
        return dateListed.toLocaleDateString('en-GB', options);
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
    versionKey: false,
  } 
)

const Items = model('items', ItemSchema)

module.exports = Items;