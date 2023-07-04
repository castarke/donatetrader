const db = require('../config/connection');
const { Users, Items, Category } = require('../models');
const items = require('./items.json');
const users = require('./users.json')

db.once('open', async () => {
  await Users.deleteMany({})
  await Items.deleteMany({})
  
  const categoryArr = await Category.find({},'_id')

  for (let i=0; i<users.length; i++){
    users[i].items[0] = categoryArr[i] 
  }

  await Users.create(users)
  const userIdArr = await Users.find({},'_id')
  for (let i=0; i<users.length; i++){
    items[i].owner = userIdArr[i]
    items[i].categories = categoryArr[i]
    items[i].tradefor = categoryArr[i]
    items[i].dateListed = Date.now()
  }

  await Items.create(items)


  console.log('all done!')
  process.exit(0)
});