const bunyan = require('bunyan');

const logger = bunyan.createLogger({
  name: 'nodejs-logger',
  streams: [
    {
      level: 'info',
      stream: process.stdout
    },

  ]
});

module.exports = logger;
