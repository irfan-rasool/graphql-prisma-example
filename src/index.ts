import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { default as typeDefs } from './graphql/types';
import { default as resolvers } from './graphql/resolvers';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

startStandaloneServer(server, {
    listen: { port: 4005},
}).then((graphqlServer) => {
    console.log(`🚀  Server ready at: ${graphqlServer.url}`);
})

