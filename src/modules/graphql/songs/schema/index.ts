import { gql } from 'apollo-server';

export const typeDefs = gql`
    directive @songExists on FIELD_DEFINITION

    # ---------------------------------------------------------

    extend type Query {
        song(id: ID!): Song!
        songs: [Song!]!
        search(name: String!): [Song!]!
    }

    # ---------------------------------------------------------

    extend type Mutation {
        setLike(songId: ID!, like: Toggle!): Song!
        addComment(songId: ID!, comment: CommentInput!): Song!
    }

    # ---------------------------------------------------------

    extend type Subscription {
        commentAdded(songId: ID!): Comment! @songExists
        listens(songId: ID!): NonNegativeInt! @songExists
    }

    # ---------------------------------------------------------

    enum Toggle {
        ADD
        REMOVE
    }

    # ---------------------------------------------------------

    interface User {
        name: String!
        avatar: String!
        isArtist: Boolean
    }

    # ---------------------------------------------------------

    type Song {
        id: ID!
        name: String!
        artist: String!
        cover: String!
        description: String!
        listens: NonNegativeInt!
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

    type RegularUser implements User {
        name: String!
        avatar: String!
        isArtist: Boolean
    }

    type ArtistUser implements User {
        name: String!
        avatar: String!
        isArtist: Boolean
    }

    # ---------------------------------------------------------

    input CommentInput {
        user: UserInput!
        text: String!
    }

    input UserInput {
        name: String!
        avatar: String!
        isArtist: Boolean
    }
`;
