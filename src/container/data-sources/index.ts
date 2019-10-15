import { HelloWorld } from '@graphql/hello-world/data-sources';

export type DataSources = {
    helloWorld: HelloWorld;
};

export const createDataSources = (): DataSources => ({
    helloWorld: new HelloWorld(),
});
