const Flight = require('../models/flight.js');

module.exports = {
    index,
    new: newFlight, 
    create
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render ('flights/index', { flights })
      });
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    req.body.airline = req.body.airline.trim(); 
    req.body.airport = req.body.airport.trim();
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err, doc) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    })
}