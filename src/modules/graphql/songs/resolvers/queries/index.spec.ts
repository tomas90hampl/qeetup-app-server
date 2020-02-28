import { createApolloTestClient } from '@container/apollo/test-hooks';
import { SongsDataSource } from '@graphql/songs/data-sources';
import { SONG_FRAGMENT } from '@graphql/songs/resolvers/test-hooks';
import { gql } from 'apollo-server';

const SONG_BY_ID = gql`
    query SongById($id: ID!) {
        song(id: $id) {
            ...SongFragment
        }
    }

    ${SONG_FRAGMENT}
`;

const ALL_SONGS = gql`
    query AllSongs {
        songs {
            ...SongFragment
        }
    }

    ${SONG_FRAGMENT}
`;

const SEARCH_SONGS = gql`
    query SearchSongs($name: String!) {
        search(name: $name) {
            ...SongFragment
        }
    }

    ${SONG_FRAGMENT}
`;

describe('Songs Queries', () => {
    it('should return an error when song with given ID does not exist', async () => {
        expect.assertions(3);

        const { query } = createApolloTestClient();
        const { errors } = await query({
            query: SONG_BY_ID,
            variables: { id: 'non-existing' },
        });

        expect(errors).not.toBeFalsy();
        expect(errors).toHaveLength(1);
        expect(errors![0].message).toMatch("Song with ID 'non-existing' does not exists.");
    });

    it('should return a song by its ID', async () => {
        expect.assertions(2);

        const songs = new SongsDataSource();
        const allSongs = await songs.getAll();
        const songId = allSongs[1].id;

        const { query } = createApolloTestClient();
        const { data: song, errors } = await query({
            query: SONG_BY_ID,
            variables: { id: songId },
        });

        expect(errors).toBeFalsy();
        expect(song).toMatchSnapshot();
    });

    it('should return all songs', async () => {
        expect.assertions(2);

        const { query } = createApolloTestClient();
        const { data: songs, errors } = await query({ query: ALL_SONGS });

        expect(errors).toBeFalsy();
        expect(songs).toMatchSnapshot();
    });

    it('should find all songs with given name', async () => {
        expect.assertions(2);

        const { query } = createApolloTestClient();
        const { data: songs, errors } = await query({
            query: SEARCH_SONGS,
            variables: { name: 'Bad' },
        });

        expect(errors).toBeFalsy();
        expect(songs).toMatchSnapshot();
    });
});
