const express = require ('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets')

// 
router.get('/:flightNo/tickets/new', ticketsCtrl.new);

router.post('/:flightNo', ticketsCtrl.create);

module.exports = router;