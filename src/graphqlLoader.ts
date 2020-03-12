import { ApolloServer } from "apollo-server-express";
import { buildSchema } from 'type-graphql';
import { Server } from "http";
import { Application } from "express"

export const graphqlLoader = async (app: Application, expressServer: Server) => {
  const Schema = await buildSchema({
    resolvers: [],
  });
  const server = new ApolloServer({
    schema: Schema,
    playground: true
  });

  server.applyMiddleware({ app });
  server.installSubscriptionHandlers(expressServer);
}