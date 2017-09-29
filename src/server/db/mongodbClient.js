const mongoose = require('mongoose');
const mongodbConfig = require('../config/config').mongodbConfig;
const db = mongoose.connect(mongodbConfig.db, {useMongoClient: true, promiseLibrary: global.Promise});

db.on('error', function (err) {
  throw err;
});
db.once('open', function () {
  console.log('open !!!');
});

module.exports = mongoose;

