const mongoose = require('mongoose');
const { Schema } = mongoose;

const BookSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        genre: {
            type: String,
        },
        authorId: {
            type: String,
        },
    },
    { collection: 'book' },
);

const bookModel = mongoose.model('book', BookSchema);

module.exports = bookModel;
