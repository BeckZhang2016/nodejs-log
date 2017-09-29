const winston = require('winston');
const moment = require('moment');
require('winston-daily-rotate-file');

const logConfig = require('../config/config').logConfig;

const fileOpt = {
  filename: logConfig.path + 'nodejs-log.log',
  datePattern: 'yyyy-MM-dd.',
  prepend: true,
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info'
};

const consoleOpt = {
  timestamp: function () {
    return Date.now();
  },
  formatter: function (options) {
    return `[${moment(options.timestamp())}] ${options.level.toUpperCase()} ${(options.message ? options.message : '')} ${options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '' }`;
  }
};

const logger = new (winston.Logger)({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  transports: [
    new (winston.transports.Console)(consoleOpt),
    new (winston.transports.DailyRotateFile)(fileOpt)
  ]
});

function loggerNormal(req, res, next) {
  logger.info(`[---->] method: ${req.method}, url: ${req.originalUrl}`);
  next();
}

function loggerError(err, req, res, next) {
  logger.error(err.message);
  console.error(err.stack);
  next();
}

module.exports = {loggerNormal, loggerError, logger};