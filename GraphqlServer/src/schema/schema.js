const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Product {
        id: ID
        name: String
        image: String
        brand: Brand
    }

    type Brand {
        id: ID!
        name: String
        products: [Product]
    }

    # ROOT type
    type Query {
        products: [Product]
        product(id: ID!): Product
        brands: [Brand]
        brand(id: ID!): Brand
    }

    type Mutation {
        createProduct(name: String, image: String, brandId: ID!): Product
        createBrand(name: String): Brand
    }
`;

module.exports = typeDefs;
