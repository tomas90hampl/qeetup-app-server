import { gql } from 'apollo-server';

export const typeDefs = gql`
    extend type Query {
        test: String!
    }
`;
