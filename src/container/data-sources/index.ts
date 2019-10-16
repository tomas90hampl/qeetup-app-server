import { SongsDataSource } from '@graphql/songs/data-sources';

export type DataSources = {
    songs: SongsDataSource;
};

export const createDataSources = (): DataSources => ({
    songs: new SongsDataSource(),
});
