const Flight = require('../models/flight.js');

module.exports = {
    create
}

function create(req, res) {
    Flight.findOne(req.param.flightNo, function(err, flight){
        if (req.body.arrival < flight.departs) { 
            // Don't allow user to enter a destination that is before departure date
            res.redirect(`/flights/${flight.flightNo}`)
            return;
        }
        flight.destinations.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight.flightNo}`)
        })
    })
}


