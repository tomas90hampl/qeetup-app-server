import { ResolverObject } from '@container/resolvers';
import { QuerySearchArgs, QuerySongArgs } from '@container/schema';

export const queries: ResolverObject = {
    song: async (_, { id }: QuerySongArgs, { dataSources: { songs } }) => songs.getById(id),
    songs: async (_, __, { dataSources: { songs } }) => songs.getAll(),
    search: async (_, { name }: QuerySearchArgs, { dataSources: { songs } }) => songs.searchByName(name),
};
