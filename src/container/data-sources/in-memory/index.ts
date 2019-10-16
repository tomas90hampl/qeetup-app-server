import { DataSource } from 'apollo-datasource';
import { Context } from '../../apollo';

export abstract class InMemoryDataSource extends DataSource<Context> {}
