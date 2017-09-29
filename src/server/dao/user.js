const mongoose = require('../db/mongodbClient');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, index: {unique: true, sparse: true}, },
  password: String,
  date: {type: Date, default: new Date()}
});



const User = mongoose.model('ts_user', userSchema);
/*User.create({username: 'beck', password: "123"}, function (err, result) {
  console.log(result);
});*/

module.exports = User;