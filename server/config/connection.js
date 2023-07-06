require('dotenv').config()
const { connect, connection } = require('mongoose');
console.log(process.env.MONGO_URI)
const connectionString = process.env.MONGO_URI || 'mongodb+srv://root:DonateTrader2023@donatetrader.ehtmwyi.mongodb.net/donatetrader?retryWrites=true&w=majority'

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;