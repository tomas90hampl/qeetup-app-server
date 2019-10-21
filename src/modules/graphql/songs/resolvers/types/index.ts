import { ResolverObject } from '@container/resolvers';
import { Song, User } from '@container/schema';

export const types: ResolverObject = {
    User: {
        __resolveType: (user: User) => (user.isArtist ? 'ArtistUser' : 'RegularUser'),
    },
    Song: {
        comments: (song: Song, _, { dataSources: { songs } }) => songs.getComments(song.id),
    },
};
