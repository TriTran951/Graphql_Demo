const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        brandId: {
            type: String,
        },
    },
    { collection: 'product' },
);

const productModel = mongoose.model('product', ProductSchema);

module.exports = productModel;
