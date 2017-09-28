const mongoose = require('mongoose');
const mongodbConfig = require('../config/config').mongodbConfig;
const db = mongoose.createConnection(mongodbConfig.db, {useMongoClient: true, promiseLibrary: Promise});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('open !!!');
});

module.exports = mongoose;

