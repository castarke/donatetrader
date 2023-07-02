const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    category: {
        type: String
    }
})
  const Categories = model('categories', CategorySchema)

  module.exports = Categories;