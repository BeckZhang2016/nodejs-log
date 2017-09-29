const router = require('express').Router();
const User = require('../../dao/user');

router.get('/', (req, res, next) => {

});

router.post('/', (req, res, next) => {
  User.find({username: "beck"}, function (err, result) {
    if(err) throw err;
    res.send(result);
  })


});

module.exports = router;
