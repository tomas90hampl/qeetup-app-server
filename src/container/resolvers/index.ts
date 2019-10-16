import { resolvers as songs } from '@graphql/songs';
import { Resolvers } from './interfaces';

export { FieldResolver, ResolverObject, Resolvers } from './interfaces';

export const resolvers: Resolvers = {
    ...songs,
    Query: { ...songs.Query },
};
