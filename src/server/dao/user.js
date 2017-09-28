const mongoose = require('../db/mongodbClient');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, index: true},
  password: String,
});

const User = mongoose.model('ts_user', userSchema);

const user = new User({username: "beck", password: 123});

module.exports = user;