import { DataSource } from 'apollo-datasource';
import { Context } from '../../apollo';

export abstract class TextDataSource extends DataSource<Context> {
    abstract getText(): string | Promise<string>;
}
