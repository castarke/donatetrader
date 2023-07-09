require('dotenv').config()
const { connect, connection } = require('mongoose');
const connectionString = 'mongodb+srv://root:DonateTrader2023@donatetrader.ehtmwyi.mongodb.net/donatetrader?retryWrites=true&w=majority'

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;