const mongoose = require('mongoose');

const Schema = mongoose.Schema; //optional shortcut to the mongoose.Schema class

const flightSchema = new Schema({
    airline:  {type: String, enum: ['American', 'Southwest', 'United']},
    airport:  {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
    flightNo: {type: Number, min: 10, max: 9999},
    departs:  {type: Date, default: function(){
        return new Date().getLocalDateString() + 1;
    }}
})

module.exports = mongoose.model('Flight', flightSchema)
