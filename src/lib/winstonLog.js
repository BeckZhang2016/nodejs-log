const winston = require('winston');
require('winston-daily-rotate-file');

const logConfig = require('../config/config').logConfig;

let opt = {
  filename: logConfig.path + 'nodejs-log.log',
  datePattern: 'yyyy-MM-dd.',
  prepend: true,
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info'
};

const logger = new (winston.Logger)({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.DailyRotateFile)(opt)
  ]
});

function loggerNormal(req, res, next) {
  logger.debug(`[---->] method: ${req.method}, url: ${req.originalUrl}`);
  next();
}

function loggerError(err, req, res, next) {
  logger.error(err.message);
  console.err(err.stack);
  next();
}

module.exports = {loggerNormal, loggerError, logger};