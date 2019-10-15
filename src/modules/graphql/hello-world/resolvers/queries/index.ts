import { ResolverObject } from '@container/resolvers';

export const queries: ResolverObject = {
    test: (_, __, { dataSources: { helloWorld } }) => helloWorld.getText(),
};
