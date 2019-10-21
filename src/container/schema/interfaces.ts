export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    NonNegativeInt: number;
}

export interface ArtistUser extends User {
    name: Scalars['String'];
    avatar: Scalars['String'];
    isArtist?: Maybe<Scalars['Boolean']>;
}

export interface Comment {
    user: User;
    text: Scalars['String'];
}

export interface CommentInput {
    user: UserInput;
    text: Scalars['String'];
}

export interface Mutation {
    setLike: Song;
    addComment: Song;
}

export interface MutationSetLikeArgs {
    songId: Scalars['ID'];
    like: Toggle;
}

export interface MutationAddCommentArgs {
    songId: Scalars['ID'];
    comment: CommentInput;
}

export interface Query {
    songs: Song[];
    search: Song[];
}

export interface QuerySearchArgs {
    name: Scalars['String'];
}

export interface RegularUser extends User {
    name: Scalars['String'];
    avatar: Scalars['String'];
    isArtist?: Maybe<Scalars['Boolean']>;
}

export interface Song {
    id: Scalars['ID'];
    name: Scalars['String'];
    artist: Scalars['String'];
    cover: Scalars['String'];
    description: Scalars['String'];
    listens: Scalars['NonNegativeInt'];
    tags: Tag[];
    audio?: Maybe<Scalars['String']>;
    isLiked?: Maybe<Scalars['Boolean']>;
    comments?: Maybe<Comment[]>;
}

export interface Subscription {
    commentAdded: Comment;
    listens: Scalars['NonNegativeInt'];
}

export interface SubscriptionCommentAddedArgs {
    songId: Scalars['ID'];
}

export interface SubscriptionListensArgs {
    songId: Scalars['ID'];
}

export interface Tag {
    value: Scalars['String'];
    isImportant?: Maybe<Scalars['Boolean']>;
}

export enum Toggle {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
}

export interface User {
    name: Scalars['String'];
    avatar: Scalars['String'];
    isArtist?: Maybe<Scalars['Boolean']>;
}

export interface UserInput {
    name: Scalars['String'];
    avatar: Scalars['String'];
    isArtist?: Maybe<Scalars['Boolean']>;
}
