const Ticket = require('../models/ticket.js');
const Flight = require('../models/flight.js')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render(`flights/tickets/new`, {flight})
    })
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        req.body.flight = flight._id;
        Ticket.create(req.body, function(err, ticket){
            res.redirect(`/flights/${flight._id}`)
    })
    })
    
}