/**
 * Created by zhangjun on 2017/9/5.
 */
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(`${req}`);
    res.send(req.query)
});

router.post('/', (req, res) => {
    console.log(`${req}`);
    res.send(req.body)
});


module.exports = router;