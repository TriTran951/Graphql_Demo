const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type Book {
        id: ID
        name: String
        author: Author,
    }

    type Author {
        id: ID!
        name: String
        age: Int
        books: [Book]
    }

    # ROOT type
    type Query {
        books:  [Book]
        book (id: ID!): Book
        authors: [Author]
        author (id: ID!): Author
    }

    type Mutation {
        createAuthor(id: ID!, name: String, age: Int): Author
    }
`

module.exports = typeDefs