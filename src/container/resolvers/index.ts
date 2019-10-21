import { resolvers as songsResolvers } from '@graphql/songs';
import { NonNegativeIntResolver } from 'graphql-scalars';
import { Resolvers } from './interfaces';

export { FieldResolver, ResolverObject, Resolvers } from './interfaces';

export const resolvers: Resolvers = {
    NonNegativeInt: NonNegativeIntResolver,
    ...songsResolvers,
    Query: { ...songsResolvers.Query },
};
