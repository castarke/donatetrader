const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
    category: {
        type: String
    }
})
  const Categories = mongoose.model('categories', CategorySchema)

  module.exports = Categories;