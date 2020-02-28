import { createApolloTestClient } from '@container/apollo/test-hooks';
import { CommentInput, Toggle } from '@container/schema';
import { SongsDataSource } from '@graphql/songs/data-sources';
import { SONG_FRAGMENT } from '@graphql/songs/resolvers/test-hooks';
import { gql } from 'apollo-server';

const SET_LIKE = gql`
    mutation SetLike($songId: ID!, $like: Toggle!) {
        setLike(songId: $songId, like: $like) {
            ...SongFragment
        }
    }

    ${SONG_FRAGMENT}
`;

const ADD_COMMENT = gql`
    mutation AddComment($songId: ID!, $comment: CommentInput!) {
        addComment(songId: $songId, comment: $comment) {
            ...SongFragment
        }
    }

    ${SONG_FRAGMENT}
`;

describe('Songs Mutations', () => {
    it('should return an error when song with given ID does not exist', async () => {
        expect.assertions(3);

        const { mutate } = createApolloTestClient();
        const { errors } = await mutate({
            mutation: SET_LIKE,
            variables: { songId: 'non-existing', like: Toggle.ADD },
        });

        expect(errors).not.toBeFalsy();
        expect(errors).toHaveLength(1);
        expect(errors![0].message).toMatch("Song with ID 'non-existing' does not exists.");
    });

    it('should like the song', async () => {
        expect.assertions(3);

        const songs = new SongsDataSource();
        const allSongs = await songs.getAll();
        const songId = allSongs[1].id;

        const { mutate } = createApolloTestClient();
        const { data: song, errors } = await mutate({
            mutation: SET_LIKE,
            variables: { songId, like: Toggle.ADD },
        });

        expect(errors).toBeFalsy();
        expect(song!.setLike.isLiked).toBe(true);
        expect(song).toMatchSnapshot();
    });

    it('should unlike the song', async () => {
        expect.assertions(3);

        const songs = new SongsDataSource();
        const allSongs = await songs.getAll();
        const songId = allSongs[0].id;

        const { mutate } = createApolloTestClient();
        const { data: song, errors } = await mutate({
            mutation: SET_LIKE,
            variables: { songId, like: Toggle.REMOVE },
        });

        expect(errors).toBeFalsy();
        expect(song!.setLike.isLiked).toBe(false);
        expect(song).toMatchSnapshot();
    });

    it('should add comment to the song', async () => {
        expect.assertions(3);

        const songs = new SongsDataSource();
        const allSongs = await songs.getAll();
        const songId = allSongs[1].id;

        const comment: CommentInput = {
            text: 'Test comment',
            user: {
                name: 'test',
                avatar: '...',
            },
        };

        const { mutate } = createApolloTestClient();
        const { data: song, errors } = await mutate({
            mutation: ADD_COMMENT,
            variables: { songId, comment },
        });

        expect(errors).toBeFalsy();
        expect(song!.addComment.comments[0].text).toMatch(comment.text);
        expect(song).toMatchSnapshot();
    });
});
