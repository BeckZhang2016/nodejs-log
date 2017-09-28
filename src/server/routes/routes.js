/**
 * Created by zhangjun on 2017/9/5.
 */
const router = require('express').Router();
const {logger} = require('../../lib/winstonLog');

router.get('/', (req, res, next) => {
  res.send(req.query)
});

router.post('/', (req, res) => {
  res.send(req.body)
});


module.exports = router;