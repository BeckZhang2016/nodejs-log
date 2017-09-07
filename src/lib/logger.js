const bunyan = require('bunyan');
const logger = bunyan.createLogger({
  name: 'nodejs-logger',
  streams: [
    {
      level: 'debug',
      stream: process.stdout
    },
    {
      type: 'rotating-file',
      path: './logs/nodejs.log',
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

module.exports = logger;
