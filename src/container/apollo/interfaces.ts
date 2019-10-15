import { Context as DefaultContext } from 'apollo-server-core';
import { DataSources } from '../data-sources';

export interface Context extends DefaultContext {
    dataSources: DataSources;
}
