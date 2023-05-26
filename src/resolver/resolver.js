const { books, authors } = require('../data/static');
const Author = require('../model/Author.model.js');
const Book = require('../model/Book.model.js');

const resolver = {
    Query: {
        books: async () => await Book.find({}),
        book: async (parent, args) => await Book.findOne({ _id: args.id }),
        authors: async (parent, args) => await Author.findOne({ _id: args.id }),
        author: async (parent, args) => await Author.findOne({ _id: args.id }),
    },
    Book: {
        author: async (parent, args) => {
            return await Author.findOne({ _id: parent.authorId });
        },
    },
    Author: {
        books: async (parent, args) => {
            return await Book.find({ authorId: parent._id });
        },
    },
    Mutation: {
        createAuthor: async (parent, args) => {
            const newAuthor = new Author(args);
            return await newAuthor.save();
        },
        createBook: async (parent, args) => {
            const newBook = new Book(args);
            return await newBook.save();
        },
    },
};

module.exports = resolver;
