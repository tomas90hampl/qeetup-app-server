import { createApolloTestClient } from '@container/apollo/test-hooks';
import { gql } from 'apollo-server';

const ALL_SONGS = gql`
    query AllSongs {
        songs {
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

describe('Songs Queries', () => {
    it('should return all songs', async () => {
        expect.assertions(1);

        const { query } = createApolloTestClient();
        const { data: songs } = await query({ query: ALL_SONGS });

        expect(songs).toMatchSnapshot();
    });
});
