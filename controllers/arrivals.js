const Flight = require('../models/flight.js');

module.exports = {
    create
}

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight){
        
        // if (req.body.arrival < flight.departs) { 
        //     // Don't allow user to enter a destination that is before departure date
        //     res.redirect(`/flights/${flight._id}`)
        //     console.log(req.body.arrival)
        //     console.log(flight.departs)
        //     return;
        // }
        flight.destinations.push(req.body);
        flight.save(function(err){
            console.log(flight)
            res.redirect(`/flights/${flight._id}`)
        })
    })
}


