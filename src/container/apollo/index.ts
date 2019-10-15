import { ApolloServer } from 'apollo-server';
import { ConnectionContext } from 'subscriptions-transport-ws';
import { createDataSources } from '../data-sources';
import { schemaDirectives } from '../directives';
import { resolvers } from '../resolvers';
import { typeDefs } from '../schema';

export { Context } from './interfaces';

export const createApolloServer = () => {
    const dataSources = createDataSources();
    return new ApolloServer({
        typeDefs,
        resolvers,
        schemaDirectives,
        dataSources: () => dataSources,
        context: ({ connection }: { connection: ConnectionContext | null }) => {
            // Necessary to duplicate data sources for subscriptions, because of separate web-socket connection.
            if (connection) return { dataSources, webSockets: true };
            return { webSockets: false };
        },
    });
};
