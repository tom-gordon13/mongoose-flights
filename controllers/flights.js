const Flight = require('../models/flight.js');

module.exports = {
    index,
    new: newFlight,
    create, 
    indexAsc, 
    indexDesc, 
    show
}

function show(req, res) {
    Flight.findOne(req.param.flightNo, function(err, flight) {
        console.log(flight.destinations.length)
        if (flight.destinations.length) {
            flight.destinations.sort((dest1, dest2) => dest1.arrival - dest2.arrival);
        }
        res.render('flights/show', {flight})
    })
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        if (req.query.sort === 'desc') flights = flights.sort((flight1, flight2) => flight2.departs - flight1.departs);
        if (req.query.sort === 'asc') flights = flights.sort((flight1, flight2) => flight1.departs - flight2.departs);
        res.render('flights/index', { flights })
    });
}

function indexAsc(req, res) {
    Flight.find({}, function (err, flights) {
        flights = flights.sort((flight1, flight2) => flight1.departs - flight2.departs);
        res.render('flights/index-asc', { flights })
    });
}

function indexDesc(req, res) {
    Flight.find({}, function (err, flights) {
        flights = flights.sort((flight1, flight2) => flight2.departs - flight1.departs);
        res.render('flights/index-desc', { flights })
    });
}


function newFlight(req, res) {
    const defaultFlight = new Flight();
    // Obtain the default date
    const dt = defaultFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function (err, doc) {
        if (err) return res.render('flights/new');
        res.redirect('/flights');
    })
}