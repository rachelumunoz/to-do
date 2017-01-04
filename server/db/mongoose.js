const mongoose = require('mongoose')

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/toDoApp');

module.exports = { mongoose }