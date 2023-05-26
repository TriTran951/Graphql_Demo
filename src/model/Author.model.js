const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        age: {
            type: Number,
        },
    },
    { collection: 'author' },
);

const authorModel = mongoose.model('author', AuthorSchema);

module.exports = authorModel;
