const Ticket = require('../models/ticket.js');
const Flight = require('../models/flight.js')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    Flight.findOne(req.param.flightNo, function(err, flight) {
        res.render(`flights/tickets/new`, {flight})
    })
}

function create(req, res) {
    let flightNo;
    Flight.findOne(req.param.flightNo, function(err, flight) {
        flightNo = req.param.flightNo
    })
    req.body.flight = flightNo;
    Ticket.create(req.body, function(err, ticket){
        res.redirect('/flights/:flightNo')
        console.log(req.body)
    })
    
}