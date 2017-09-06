/**
 * Created by zhangjun on 2017/9/5.
 */
const router = require('express').Router();
const log = require('../../lib/logger');

router.get('/', (req, res) => {
  log.info(`get ${req}`);
  res.send(req.query)
});

router.post('/', (req, res) => {
  log.info(`post ${req}`);
  res.send(req.body)
});


module.exports = router;