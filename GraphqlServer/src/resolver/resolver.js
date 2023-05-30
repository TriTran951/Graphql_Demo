const { books, authors } = require('../data/static');
const Product = require('../model/Product.model');
const Brand = require('../model/Brand.model');

const resolver = {
    Query: {
        products: async () => await Product.find({}),
        product: async (parent, args) => await Product.findOne({ _id: args.id }),
        brands: async () => await Brand.find({}),
        brand: async (parent, args) => await Brand.findOne({ _id: args.id }),
    },
    Product: {
        brand: async (parent, args) => {
            return await Brand.findOne({ _id: parent.brandId });
        },
    },
    Brand: {
        products: async (parent, args) => {
            return await Product.find({ brandId: parent._id });
        },
    },
    Mutation: {
        createProduct: async (parent, args) => {
            const newProduct = new Product(args);
            return await newProduct.save();
        },
        createBrand: async (parent, args) => {
            const newBrand = new Brand(args);
            return await newBrand.save();
        },
    },
};

module.exports = resolver;
