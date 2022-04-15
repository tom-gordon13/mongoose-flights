var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// Get /flights/index
router.get('/', flightsCtrl.index);

router.get('/index-asc', flightsCtrl.indexAsc);

router.get('/index-desc', flightsCtrl.indexDesc);

router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);

module.exports = router;
