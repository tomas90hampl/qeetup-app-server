import { GraphQLField } from '@container/directives';
import { GraphQLFieldResolver } from '@container/directives/interfaces';
import { ApolloError, SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver } from 'graphql';

type Args = { songId?: string };

export class SongExistenceDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field: GraphQLField<Args>): void {
        const { resolve = defaultFieldResolver, subscribe } = field;
        field.resolve = applyDirective(field, resolve);
        if (!subscribe) return;
        field.subscribe = applyDirective(field, subscribe);
    }
}

function applyDirective(field: GraphQLField<Args>, resolver: GraphQLFieldResolver<Args>) {
    return (async (...resolverArgs) => {
        const [, { songId }, context] = resolverArgs;
        const {
            dataSources: { songs },
        } = context;

        if (!songId) {
            throw new ApolloError('Invalid use of SongExistenceDirective field must contain "songId" argument.');
        }

        await songs.getById(songId); // Test if a song exists
        return resolver.apply(field, resolverArgs);
    }) as GraphQLFieldResolver<Args>;
}
