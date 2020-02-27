import { Context } from '@container/apollo';
import { GraphQLField } from '@container/directives';
import { SchemaDirectiveVisitor, UserInputError } from 'apollo-server';
import { defaultFieldResolver } from 'graphql';

export class SongExistenceDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field: GraphQLField<{ id?: string; songId?: string }>) {
        const { resolve = defaultFieldResolver, subscribe } = field;
        field.resolve = async (...args) => {
            const [, { id, songId }, context] = args;
            await validateSongExistence(id ?? songId ?? null, context);
            return resolve.apply(field, args);
        };

        if (!subscribe) return;

        field.subscribe = async (...args) => {
            const [, { id, songId }, context] = args;
            await validateSongExistence(id ?? songId ?? null, context);
            return subscribe.apply(field, args);
        };
    }
}

async function validateSongExistence(songId: string | null, { dataSources: { songs } }: Context) {
    if (!songId || !(await songs.exist(songId))) {
        throw new UserInputError(`Song with ID '${songId}' does not exists.`, { invalidSongId: songId });
    }
}
