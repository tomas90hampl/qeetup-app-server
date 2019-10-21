import { pubsub } from '@container/apollo/pubsub';
import { FieldResolver, ResolverObject } from '@container/resolvers';
import { CommentInput, Subscription } from '@container/schema';
import { subscriptions, Triggers } from '.';
import { SongsDataSource } from '../../data-sources';

describe('Songs Subscriptions', () => {
    it('should subscribe to comment adding', async () => {
        const resolver = subscriptions.commentAdded as ResolverObject;
        const subscribe = resolver.subscribe as FieldResolver;

        const songs = new SongsDataSource();
        const allSongs = await songs.getAll();
        const songId = allSongs[0].id;

        // @ts-ignore: Skip info argument.
        const iterator: AsyncIterator<Subscription> = subscribe(null, { songId }, { dataSources: { songs } });

        iterator.next().then(({ value: { commentAdded } }) => expect(commentAdded).toMatchSnapshot());

        const comment: CommentInput = {
            text: 'Test comment',
            user: {
                name: 'test',
                avatar: '...',
            },
        };

        await pubsub.publish(Triggers.COMMENT_ADDED, { songId, commentAdded: comment });
    });

    it('should subscribe to number of listeners', async () => {
        const resolver = subscriptions.listens as ResolverObject;
        const subscribe = resolver.subscribe as FieldResolver;

        const songs = new SongsDataSource();
        const allSongs = await songs.getAll();
        const songId = allSongs[0].id;

        // @ts-ignore: Skip info argument.
        const iterator: AsyncIterator<Subscription> = subscribe(null, { songId }, { dataSources: { songs } });

        iterator.next().then(({ value: { listens } }) => expect(listens).toBe(allSongs[0].listens + 1));
        iterator.next();
    });
});
