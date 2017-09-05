/**
 * Created by zhangjun on 2017/9/5.
 */
const express = require('express');
const {appConfig} = require('../config/config');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./routes/routes'));

app.listen(appConfig.port, () => {
    console.info(`server is starting on ${appConfig.port}`);
});

module.exports = app;