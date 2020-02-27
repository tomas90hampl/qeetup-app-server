import { Context } from '@container/apollo';
import { GraphQLField } from '@container/directives';
import { SchemaDirectiveVisitor, UserInputError } from 'apollo-server';
import { defaultFieldResolver } from 'graphql';

export class SongExistenceDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field: GraphQLField<{ songId: string }>) {
        const { resolve = defaultFieldResolver, subscribe } = field;
        field.resolve = async (...args) => {
            const [, { songId }, context] = args;
            await validateSongExistence(songId, context);
            return resolve.apply(field, args);
        };

        if (!subscribe) return;

        field.subscribe = async (...args) => {
            const [, { songId }, context] = args;
            await validateSongExistence(songId, context);
            return subscribe.apply(field, args);
        };
    }
}

async function validateSongExistence(songId: string, { dataSources: { songs } }: Context) {
    if (!(await songs.exist(songId))) {
        throw new UserInputError(`Song with ID '${songId}' does not exists.`, { invalidSongId: songId });
    }
}
