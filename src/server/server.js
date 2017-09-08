/**
 * Created by zhangjun on 2017/9/5.
 */
const express = require('express');
const bodyParser = require('body-parser');
const {appConfig} = require('../config/config');
const app = express();
const {loggerSuccess, loggerFail} = require('../lib/logger');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(loggerSuccess);
app.use('/api', require('./routes/routes'));

app.use(loggerFail);

app.listen(appConfig.port, () => {
    console.info(`server is starting on ${appConfig.port}`);
});

module.exports = app;