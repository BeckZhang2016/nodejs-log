const mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/mydb',{useMongoClient: true});
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{body: String, date: Date}],
  date: {type: Date, default: Date.now},
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const Blog = mongoose.model('Blog', blogSchema);

const animalSchema = new Schema({
  name: String,
  type: String,
  tags: { type: [String], index: true }
});

animalSchema.index({ name: 1, type: -1 });

animalSchema.methods.findSimilarTypes = function (cb) {
  return this.model('Animal').find({type: this.type}, cb);
};
const Animal = mongoose.model('Animal', animalSchema);
const dog = new Animal({type: 'dog'});
dog.findSimilarTypes(function (err, dogs) {
  console.log(dogs); // woof
});

