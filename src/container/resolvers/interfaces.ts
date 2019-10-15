import { IFieldResolver, IResolverObject, IResolvers } from 'apollo-server';
import { Context } from '../apollo';

export type FieldResolver = IFieldResolver<any, Context>;

export type ResolverObject = IResolverObject<any, Context>;

export interface Resolvers extends IResolvers<any, Context> {
    Query?: ResolverObject | any;
    Mutation?: ResolverObject | any;
    Subscription?: ResolverObject | any;
}
