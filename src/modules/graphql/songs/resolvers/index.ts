import { Resolvers } from '@container/resolvers';
import { mutations } from './mutations';
import { queries } from './queries';
import { subscriptions } from './subscriptions';
import { types } from './types';

export const resolvers: Resolvers = {
    ...types,
    Query: queries,
    Mutation: mutations,
    Subscription: subscriptions,
};
