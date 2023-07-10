const { Schema, model } = require('mongoose');
const { categories } = require('./categorydata')

// Subcategory schema
const subcategorySchema = new Schema({
  name: {
    type: String,
    required: false
  }
});

// Category schema
const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subcategories: [subcategorySchema]
});

// Create models for subcategory and category
const Subcategory = model('subcategory', subcategorySchema);
let Category = model('Category', categorySchema);

//process categories
const createCategories = async () => {
  for (const category of categories) {
    const existingCategory = await Category.findOne({ name: category.name });

    if (!existingCategory) {
      const newCategory = new Category(category);
      await newCategory.save();
      console.log(`Category '${category.name}' saved.`);
    }
  }

  console.log('All categories processed.');
}

createCategories()

module.exports = {
  Subcategory,
  Category
};