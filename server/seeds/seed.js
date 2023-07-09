const db = require('../config/connection');
const { Users, Items, Category } = require('../models');
const items = require('./items.json');
const users = require('./users.json')

db.once('open', async () => {
  await Users.deleteMany({})
  await Items.deleteMany({})
  
  //const categoryArr = await Category.find({},'_id')

  // for (let i=0; i<users.length; i++){
  //   users[i].items[0] = categoryArr[i] 
  // }

  await Users.create(users)
  const userArr = await Users.find({})
  for (let i=0; i<users.length; i++){
    items[i].owner = userArr[i]
    // items[i].categories = categoryArr[i]
    // items[i].tradefor = categoryArr[i]
    items[i].dateListed = Date.now()
  }
  console.log('ducks',userArr)

  await Items.create(items)
  const itemIdArr = await Items.find({},'_id')
  console.log('geese',itemIdArr)
  for (let i=0; i<items.length; i++){
    let  = userArr[i].id
    users[i].items.push(itemIdArr[i])
    
    await Users.findByIdAndUpdate(userArr[i]._id, { $push: { items: itemIdArr[i] } });
  }
  console.log(JSON.stringify(users))




  console.log('all done!')
  process.exit(0)
});