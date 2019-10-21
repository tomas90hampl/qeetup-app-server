import { typeDefs as songsTypeDefs } from '@graphql/songs';
import { gql } from 'apollo-server';

export * from './interfaces';

const globalTypeDefs = gql`
    scalar NonNegativeInt

    type Query

    type Mutation

    type Subscription
`;

export const typeDefs = [globalTypeDefs, songsTypeDefs];
