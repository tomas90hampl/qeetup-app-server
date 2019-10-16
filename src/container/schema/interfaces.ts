export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
}

export interface Comment {
    user: User;
    text: Scalars['String'];
}

export interface Query {
    songs: Song[];
}

export interface Song {
    name: Scalars['String'];
    artist: Scalars['String'];
    cover: Scalars['String'];
    description: Scalars['String'];
    listens: Scalars['Int'];
    tags: Tag[];
    audio?: Maybe<Scalars['String']>;
    isLiked?: Maybe<Scalars['Boolean']>;
    comments?: Maybe<Comment[]>;
}

export interface Tag {
    value: Scalars['String'];
    isImportant?: Maybe<Scalars['Boolean']>;
}

export interface User {
    name: Scalars['String'];
    avatar: Scalars['String'];
    isArtist?: Maybe<Scalars['Boolean']>;
}
