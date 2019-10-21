import { Context } from '@container/apollo';
import { pubsub } from '@container/apollo/pubsub';
import { ResolverObject } from '@container/resolvers';
import { SubscriptionCommentAddedArgs, SubscriptionListensArgs } from '@container/schema';
import { withFilter } from 'apollo-server';

export enum Triggers {
    COMMENT_ADDED = 'COMMENT_ADDED',
    LISTENER_ADDED = 'LISTENER_ADDED',
}

export const subscriptions: ResolverObject = {
    commentAdded: {
        subscribe: withFilter(
            () => pubsub.asyncIterator<Comment>(Triggers.COMMENT_ADDED),
            (payload: { songId: string }, { songId }: SubscriptionCommentAddedArgs) => payload.songId === songId,
        ),
    },
    listens: {
        subscribe: withFilter(
            (_, { songId }: SubscriptionListensArgs, { dataSources: { songs } }: Context) => {
                const iterator = pubsub.asyncIterator<number>(Triggers.LISTENER_ADDED);
                songs.addListener(songId).then((song) => pubsub.publish(Triggers.LISTENER_ADDED, { songId, listens: song.listens }));
                return iterator;
            },
            (payload: { songId: string }, { songId }: SubscriptionListensArgs) => payload.songId === songId,
        ),
    },
};
