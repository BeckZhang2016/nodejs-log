
const router = require('express').Router();
const user = require('../../dao/user');

router.get('/', (req, res, next) => {
  res.send(req.query)
});

router.post('/', (req, res) => {
  user.save({username: 'test001', password: "test001"});
  res.send(req.body)
});

module.exports = router;
