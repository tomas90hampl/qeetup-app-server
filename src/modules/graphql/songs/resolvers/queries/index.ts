import { ResolverObject } from '@container/resolvers';

export const queries: ResolverObject = {
    songs: (_, __, { dataSources: { songs } }) => songs.getAll(),
};
