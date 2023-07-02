require('dotenv').config()
const { connect, connection } = require('mongoose');
const connectionString = process.env.MONGO_URI || 'mongodb://root:root@localhost:27017/donateTrader?authMechanism=DEFAULT&authSource=admin'

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;