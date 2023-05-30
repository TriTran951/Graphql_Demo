const mongoose = require('mongoose');
const { Schema } = mongoose;

const BrandSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
    },
    { collection: 'brand' },
);

const brandModel = mongoose.model('brand', BrandSchema);

module.exports = brandModel;
