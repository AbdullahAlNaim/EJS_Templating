const mongoose = require('mongoose');

const vehicles = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('cars', vehicles)