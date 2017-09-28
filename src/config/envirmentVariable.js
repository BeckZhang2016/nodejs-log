const path = require('path');

module.exports = {
  LOG_PATH: process.env.LOG_PATH || path.join(__dirname, '../../logs/'),

};
