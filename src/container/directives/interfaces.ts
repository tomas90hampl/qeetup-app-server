import { GraphQLField as Field, GraphQLObjectType as ObjectType } from 'graphql';
import { Context } from '../apollo';

export type GraphQLObjectType<Args = { [key: string]: any }> = ObjectType<any, Context, Args>;

export type GraphQLField<Args = { [key: string]: any }> = Field<any, Context, Args>;
