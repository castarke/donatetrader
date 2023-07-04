const mongoose = require('mongoose');

// Subcategory schema
const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

// Category schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subcategories: [subcategorySchema]
});

// Create models for subcategory and category
const Subcategory = mongoose.model('Subcategory', subcategorySchema);
const Category = mongoose.model('Category', categorySchema);

// Define the categories and subcategories
const furnitureSubcategories = [
  { name: 'Office' },
  { name: 'Dining' },
  { name: 'Recliner' },
  { name: 'Rocking' }
];

const clothingSubcategories = [
  { name: "Women's Clothing", subcategories: ['Tops', 'Pants', 'Dresses', 'Skirts', 'Coats', 'Shorts', 'Hats'] },
  { name: "Men's Clothing", subcategories: ['Shirts', 'Trousers', 'Pants', 'Jackets', 'Hoodies', 'Suits', 'Caps'] },
  'Shoes',
  'Bags',
  'Accessories',
  'Jewelry'
];

const electronicsSubcategories = [
  'Smartphones',
  'Laptops',
  'Macbooks',
  'Headsets',
  'Stereo',
  'TVs',
  'Playstations',
  'Printers',
  'Cameras',
  'Audio Equipment'
];

const sportsSubcategories = [
  'Sporting Equipment',
  'Bicycles',
  'Camping Gear',
  'Fitness Equipment',
  'Outdoor Gear'
];

const babyKidsSubcategories = [
  'Baby Gear',
  'Toys',
  'Clothing',
  'Strollers'
];

const entertainmentSubcategories = [
  'Books',
  'Movies',
  'Games',
  'Tickets'
];

const appliancesSubcategories = [
  'Kitchen Appliances',
  'Laundry Machines',
  'Air Conditioners',
  'Household Appliances'
];

const autoSubcategories = [
  'Cars',
  'Trucks',
  'Motorcycles',
  'Boats',
  'RVs'
];

const booksMusicSubcategories = [
  'Books',
  'DVDs',
  'CDs',
  'Vinyl Records'
];

const servicesSubcategories = [
  'Plumbing',
  'Cleaning',
  'Tutoring'
];

const jobsSubcategories = [
  'Job Listings',
  'Services and Employment Opportunities'
];

const petsSubcategories = [
  'Dogs',
  'Cats',
  'Small Pets',
  'Pet Supplies and Accessories'
];

// Create initial categories with subcategories
const furnitureCategory = new Category({
  name: 'Furniture',
  subcategories: furnitureSubcategories
});

const clothingCategory = new Category({
  name: 'Clothing & Accessories',
  subcategories: clothingSubcategories
});

const electronicsCategory = new Category({
  name: 'Electronics',
  subcategories: electronicsSubcategories
});

const sportsCategory = new Category({
  name: 'Sports & Outdoors',
  subcategories: sportsSubcategories
});

const babyKidsCategory = new Category({
  name: 'Baby and Kids',
  subcategories: babyKidsSubcategories
});

const entertainmentCategory = new Category({
  name: 'Entertainment',
  subcategories: entertainmentSubcategories
});

const appliancesCategory = new Category({
  name: 'Appliances',
  subcategories: appliancesSubcategories
});

const autoCategory = new Category({
  name: 'Auto',
  subcategories: autoSubcategories
});

const booksMusicCategory = new Category({
  name: 'Books, Movies & Music',
  subcategories: booksMusicSubcategories
});

const servicesCategory = new Category({
  name: 'Services',
  subcategories: servicesSubcategories
});

const jobsCategory = new Category({
  name: 'Jobs',
  subcategories: jobsSubcategories
});

const petsCategory = new Category({
  name: 'Pets',
  subcategories: petsSubcategories
});

module.exports = {
  Subcategory,
  Category,
  furnitureCategory,
  clothingCategory,
  electronicsCategory,
  sportsCategory,
  babyKidsCategory,
  entertainmentCategory,
  appliancesCategory,
  autoCategory,
  booksMusicCategory,
  servicesCategory,
  jobsCategory,
  petsCategory
};