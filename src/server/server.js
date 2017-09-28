/**
 * Created by zhangjun on 2017/9/5.
 */
const express = require('express');
const bodyParser = require('body-parser');
const {appConfig} = require('../config/config');
const app = express();
const {loggerNormal, loggerError} = require('../lib/winstonLog');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(loggerNormal);

app.use('/api', require('./routes/routes'));

app.use(loggerError);

app.listen(appConfig.port, () => {
    console.info(`server is starting on ${appConfig.port}`);
});

module.exports = app;