import { ResolverObject } from '@container/resolvers';
import { QuerySearchArgs } from '@container/schema';

export const queries: ResolverObject = {
    songs: async (_, __, { dataSources: { songs } }) => songs.getAll(),
    search: async (_, { name }: QuerySearchArgs, { dataSources: { songs } }) => songs.searchByName(name),
};
