import { gql } from 'apollo-server';

export const SONG_FRAGMENT = gql`
    fragment SongFragment on Song {
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
`;
