/**
 * Created by zhangjun on 2017/9/5.
 */
const router = require('express').Router();
const {bunyanlog} = require('../../lib/logger');

router.get('/', (req, res, next) => {
  bunyanlog.info(`get`);
  next(new Error('is error'));
  res.send(req.query)
});

router.post('/', (req, res) => {
  bunyanlog.info(`post`);
  res.send(req.body)
});


module.exports = router;