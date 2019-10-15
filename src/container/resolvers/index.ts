import { resolvers as helloWorld } from '@graphql/hello-world';
import { Resolvers } from './interfaces';

export { FieldResolver, ResolverObject, Resolvers } from './interfaces';

export const resolvers: Resolvers = {
    ...helloWorld,
    Query: { ...helloWorld.Query },
};
