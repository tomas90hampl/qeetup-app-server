import { pubsub } from '@container/apollo/pubsub';
import { ResolverObject } from '@container/resolvers';
import { MutationAddCommentArgs, MutationSetLikeArgs } from '@container/schema';
import { Triggers } from '../subscriptions';

export const mutations: ResolverObject = {
    setLike: async (_, { songId, like }: MutationSetLikeArgs, { dataSources: { songs } }) => songs.setLike(songId, like),
    addComment: async (_, { songId, comment }: MutationAddCommentArgs, { dataSources: { songs } }) => {
        await pubsub.publish(Triggers.COMMENT_ADDED, { songId, commentAdded: comment });
        return songs.addComment(songId, comment);
    },
};
