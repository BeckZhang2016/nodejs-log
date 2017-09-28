/**
 * Created by zhangjun on 2017/9/5.
 */
const router = require('express').Router();
const {logger} = require('../lib/winstonLog');

router.use('/user', require('./routers/user'));


module.exports = router;