'use strict';

var express = require('express');
var router = express.Router();

const handler = require('../Handler/main_handler');
const Handler = new handler();

// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })

router.get('/alive',Handler.alive);
router.post('/post_req',Handler.post_req);
router.post('/post_req_pic',Handler.post_pic);
router.get('/get_res_pic', Handler.get_pic)

router.get('/', function (req, res) {
    res.send('connection success...!')
});

module.exports = router;