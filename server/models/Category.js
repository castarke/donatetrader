const { Schema, model } = require('mongoose');

// Subcategory schema
const subcategorySchema = new Schema({
  name: {
    type: String,
    required: true
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
  { name: 'Shoes'},
  { name: 'Bags'},
  { name: 'Accessories'},
  { name: 'Jewelry'}
];

const electronicsSubcategories = [
	{  name : 'Smartphones'},
	{  name : 'Laptops'},
	{  name : 'Macbooks'},
	{  name : 'Headsets'},
	{  name : 'Stereo'},
	{  name : 'TVs'},
	{  name : 'Playstations'},
	{  name : 'Printers'},
	{  name : 'Cameras'},
	{  name : 'Audio Equipment' }
];

const sportsSubcategories = [
	{  name : 'Sporting Equipment'},
	{  name : 'Bicycles'},
	{  name : 'Camping Gear'},
	{  name : 'Fitness Equipment'},
	{  name : 'Outdoor Gear' }
];

const babyKidsSubcategories = [
	{  name : 'Baby Gear'},
	{  name : 'Toys'},
	{  name : 'Clothing'},
	{  name : 'Strollers' }
];

const entertainmentSubcategories = [
	{  name : 'Books'},
	{  name : 'Movies'},
	{  name : 'Games'},
	{  name : 'Tickets' }
];

const appliancesSubcategories = [
	{  name : 'Kitchen Appliances'},
	{  name : 'Laundry Machines'},
	{  name : 'Air Conditioners'},
	{  name : 'Household Appliances' }
];

const autoSubcategories = [
	{  name : 'Cars'},
	{  name : 'Trucks'},
	{  name : 'Motorcycles'},
	{  name : 'Boats'},
	{  name : 'RVs' }
];

const booksMusicSubcategories = [
	{  name : 'Books'},
	{  name : 'DVDs'},
	{  name : 'CDs'},
	{  name : 'Vinyl Records' }
];

const servicesSubcategories = [
	{  name : 'Plumbing'},
	{  name : 'Cleaning'},
	{  name : 'Tutoring' }
];

const jobsSubcategories = [
	{  name : 'Job Listings'},
	{  name : 'Services and Employment Opportunities' }
];

const petsSubcategories = [
	{  name : 'Dogs'},
	{  name : 'Cats'},
	{  name : 'Small Pets'},
	{  name : 'Pet Supplies and Accessories' }
];

// Create initial categories with subcategories
const createCategories = async () => {
  const furnitureCategory = new Category({
    name: 'Furniture',
    subcategories: furnitureSubcategories
  });

  await furnitureCategory.save()

  const clothingCategory = new Category({
    name: 'Clothing & Accessories',
    subcategories: clothingSubcategories
  });
  await clothingCategory.save()

  const electronicsCategory = new Category({
    name: 'Electronics',
    subcategories: electronicsSubcategories
  });
  await electronicsCategory.save()

  const sportsCategory = new Category({
    name: 'Sports & Outdoors',
    subcategories: sportsSubcategories
  });
  await sportsCategory.save()

  const babyKidsCategory = new Category({
    name: 'Baby and Kids',
    subcategories: babyKidsSubcategories
  });
  await babyKidsCategory.save()

  const entertainmentCategory = new Category({
    name: 'Entertainment',
    subcategories: entertainmentSubcategories
  });
  await entertainmentCategory.save()

  const appliancesCategory = new Category({
    name: 'Appliances',
    subcategories: appliancesSubcategories
  });
  await appliancesCategory.save()

  const autoCategory = new Category({
    name: 'Auto',
    subcategories: autoSubcategories
  });
  await autoCategory.save()

  const booksMusicCategory = new Category({
    name: 'Books, Movies & Music',
    subcategories: booksMusicSubcategories
  });
  await booksMusicCategory.save()

  const servicesCategory = new Category({
    name: 'Services',
    subcategories: servicesSubcategories
  });
  await servicesCategory.save()

  const jobsCategory = new Category({
    name: 'Jobs',
    subcategories: jobsSubcategories
  });
  await jobsCategory.save()

  const petsCategory = new Category({
    name: 'Pets',
    subcategories: petsSubcategories
  });
  await petsCategory.save()
}

createCategories()
  .then(() => {
    console.log('All categories saved.');
  })
  .catch((error) => {
    console.error('Failed to save categories:', error);
  });

module.exports = {
  Subcategory,
  Category
};