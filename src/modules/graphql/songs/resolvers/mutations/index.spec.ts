import { createApolloTestClient } from '@container/apollo/test-hooks';
import { CommentInput, Toggle } from '@container/schema';
import { SongsDataSource } from '@graphql/songs/data-sources';
import { gql } from 'apollo-server';

const SET_LIKE = gql`
    mutation SetLike($songId: ID!, $like: Toggle!) {
        setLike(songId: $songId, like: $like) {
            name
            artist
            cover
            description
            listens
            tags {
                value
                isImportant
            }
            audio
            isLiked
            comments {
                user {
                    name
                    avatar
                    isArtist
                }
                text
            }
        }
    }
`;

const ADD_COMMENT = gql`
    mutation AddComment($songId: ID!, $comment: CommentInput!) {
        addComment(songId: $songId, comment: $comment) {
            name
            artist
            cover
            description
            listens
            tags {
                value
                isImportant
            }
            audio
            isLiked
            comments {
                user {
                    name
                    avatar
                    isArtist
                }
                text
            }
        }
    }
`;

describe('Songs Mutations', () => {
    it('should return an error when song with given ID does not exist', async () => {
        expect.assertions(3);

        const { mutate } = createApolloTestClient();
        const { errors } = await mutate({
            mutation: SET_LIKE,
            variables: { songId: 'non-existing', like: Toggle.ADD },
        });

        expect(errors).not.toBeNull();
        expect(errors).toHaveLength(1);
        expect(errors![0].message).toMatch("Song with ID 'non-existing' does not exists.");
    });

    it('should like the song', async () => {
        expect.assertions(2);

        const songs = new SongsDataSource();
        const allSongs = await songs.getAll();
        const songId = allSongs[1].id;

        const { mutate } = createApolloTestClient();
        const { data: song } = await mutate({
            mutation: SET_LIKE,
            variables: { songId, like: Toggle.ADD },
        });

        expect(song!.setLike.isLiked).toBe(true);
        expect(song).toMatchSnapshot();
    });

    it('should unlike the song', async () => {
        expect.assertions(2);

        const songs = new SongsDataSource();
        const allSongs = await songs.getAll();
        const songId = allSongs[0].id;

        const { mutate } = createApolloTestClient();
        const { data: song } = await mutate({
            mutation: SET_LIKE,
            variables: { songId, like: Toggle.REMOVE },
        });

        expect(song!.setLike.isLiked).toBe(false);
        expect(song).toMatchSnapshot();
    });

    it('should add comment to the song', async () => {
        expect.assertions(2);

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
        const { data: song } = await mutate({
            mutation: ADD_COMMENT,
            variables: { songId, comment },
        });

        expect(song!.addComment.comments[0].text).toMatch(comment.text);
        expect(song).toMatchSnapshot();
    });
});
