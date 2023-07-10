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

const categories = [
  {
      name: 'Furniture',
      subcategories: furnitureSubcategories
  },
  {
      name: 'Clothing & Accessories',
      subcategories: clothingSubcategories
  },
  {
      name: 'Electronics',
      subcategories: electronicsSubcategories
  },
  {
      name: 'Sports & Outdoors',
      subcategories: sportsSubcategories
  },
  {
      name: 'Baby and Kids',
      subcategories: babyKidsSubcategories
  },
  {
      name: 'Entertainment',
      subcategories: entertainmentSubcategories
  },
  {
      name: 'Appliances',
      subcategories: appliancesSubcategories
  },
  {
      name: 'Auto',
      subcategories: autoSubcategories
  },
  {
      name: 'Books, Movies & Music',
      subcategories: booksMusicSubcategories
  },
  {
      name: 'Services',
      subcategories: servicesSubcategories
  },
  {
      name: 'Jobs',
      subcategories: jobsSubcategories
  },
  {
      name: 'Pets',
      subcategories: petsSubcategories
  },
]

module.exports = {categories}