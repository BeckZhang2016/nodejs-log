/**
 * Created by zhangjun on 2017/9/5.
 */
const envVariable = require('./envirmentVariable');
const path = require('path');

module.exports.appConfig = {
  port: 8080,
  host: '127.0.0.1'
};

module.exports.mongodbConfig = {
  db: 'mongodb://localhost:27017/mydb'
};

module.exports.logConfig = {
  path: path.join(__dirname, '../../logs/')
};