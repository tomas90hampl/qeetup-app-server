import { directives as songsDirectives } from '@graphql/songs';

export { GraphQLField, GraphQLObjectType } from './interfaces';

export const schemaDirectives = {
    ...songsDirectives,
};
