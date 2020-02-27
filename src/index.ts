import { createApolloServer } from '@container/apollo';

const server = createApolloServer();

server.listen().then(({ url }) => {
    console.info(`Server ready at ${url}`);
});
