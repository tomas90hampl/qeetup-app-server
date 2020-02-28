import { GraphQLField as Field, GraphQLFieldResolver as FieldResolver, GraphQLObjectType as ObjectType } from 'graphql';
import { Context } from '../apollo';

export type GraphQLObjectType<Args = { [key: string]: any }> = ObjectType<any, Context, Args>;

export type GraphQLField<Args = { [key: string]: any }> = Field<any, Context, Args>;

export type GraphQLFieldResolver<Args = { [key: string]: any }> = FieldResolver<any, Context, Args>;
