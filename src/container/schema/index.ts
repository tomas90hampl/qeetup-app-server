import { typeDefs as helloWorldTypeDefs } from '@graphql/hello-world';
import { gql } from 'apollo-server';

export * from './interfaces';

const globalTypeDefs = gql`
    type Query
`;

export const typeDefs = [globalTypeDefs, helloWorldTypeDefs];
