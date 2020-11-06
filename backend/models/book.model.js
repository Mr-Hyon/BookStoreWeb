const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    genre: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('books', BookSchema);