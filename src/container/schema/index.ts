import { typeDefs as songsTypeDefs } from '@graphql/songs';
import { gql } from 'apollo-server';

export * from './interfaces';

const globalTypeDefs = gql`
    type Query
`;

export const typeDefs = [globalTypeDefs, songsTypeDefs];
