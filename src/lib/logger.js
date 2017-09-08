const bunyan = require('bunyan');
const bunyanlog = bunyan.createLogger({
  name: 'nodejs-logger',
  streams: [
    {
      level: 'debug',
      stream: process.stdout
    },
    {
      type: 'rotating-file',
      path: '../../logs/nodejs.log',
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

function loggerSuccess(req, res, next) {
  bunyanlog.fields.req_id = req.headers['x-tranaction-id'];
  bunyanlog.debug({req: req});
  next();
  bunyanlog.debug({res: res});
}

function loggerFail(err, req, res, next) {
  bunyanlog.fields.req_id = req.headers['x-tranaction-id'];
  bunyanlog.debug({req: req});
  bunyanlog.error(err);
  next();
  bunyanlog.debug({res: res});
}

module.exports = {loggerSuccess, loggerFail, bunyanlog};