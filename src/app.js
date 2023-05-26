const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');
const PORT = 4000;
const mongo_URI = `mongodb+srv://trantri250920022:BkXO8IEfXf9WB0bg@graphql-demo.okxiwfs.mongodb.net/Graphql-Demo?retryWrites=true&w=majority`;

//connect db
const connectDB = async () => {
    try {
        await mongoose.connect(mongo_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Mongodb connected');
    } catch (error) {
        console.log(error);
        console.log('Mongodb connect fail');
        process.exit(1);
    }
};

async function startServer() {
    const app = express();

    app.use(express.json());

    let server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`));
}

connectDB().then(() => startServer());
