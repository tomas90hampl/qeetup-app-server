import { gql } from 'apollo-server';

export const typeDefs = gql`
    extend type Query {
        songs: [Song!]!
    }

    type Song {
        name: String!
        artist: String!
        cover: String!
        description: String!
        listens: Int!
        tags: [Tag!]!
        audio: String
        isLiked: Boolean
        comments: [Comment!]
    }

    type Tag {
        value: String!
        isImportant: Boolean
    }

    type Comment {
        user: User!
        text: String!
    }

    type User {
        name: String!
        avatar: String!
        isArtist: Boolean
    }
`;
