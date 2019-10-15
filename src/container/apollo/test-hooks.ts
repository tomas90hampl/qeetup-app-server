import { createTestClient } from 'apollo-server-testing';
import { createApolloServer } from '.';

/** Use this function for creating test client instances for Apollo server with default configuration. */
export const createApolloTestClient = () => {
    const server = createApolloServer();
    return createTestClient(server);
};
