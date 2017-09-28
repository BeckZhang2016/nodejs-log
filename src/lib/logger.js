const bunyan = require('bunyan');
const fs = require('fs');

const {logConfig} = require('../config/config');

fs.access(logConfig.path, (err) => {
  if (err) fs.mkdirSync(logConfig.path);
});

const logger = bunyan.createLogger({
  name: 'nodejs-logger',
  streams: [
    {
      level: 'debug',
      stream: process.stdout
    },
    {
      type: 'rotating-file',
      path: `${logConfig.path}nodejs-log.log`,
      period: '1d',
      count: 1,
      level: 'debug'
    }

  ],
  serializers: {
    req: bunyan.stdSerializers.req,
    res: bunyan.stdSerializers.res,
    err: bunyan.stdSerializers.err
  }
});

process.on('SIGUSR2', function () {
  bunyan.reopenFileStreams();
});

function reqSerializer(req) {
  return {
    method: req.method,
    url: req.url,
    headers: req.headers
  };
}

function loggerNormal(req, res, next) {
  logger.debug({req: req});
  next();
}

function loggerError(err, req, res, next) {
  logger.error(err);
  next();
}

module.exports = {loggerNormal, loggerError, logger};