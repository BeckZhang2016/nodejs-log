/**
 * Created by zhangjun on 2017/9/5.
 */
const path = require('path');

module.exports.globalConfig = {

};

module.exports.appConfig = {
  port: 8080,
  host: '127.0.0.1'
};

module.exports.dbConfig = {};

module.exports.logConfig = {
  path: path.join(__dirname, '../../logs/')
};