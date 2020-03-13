import { ApolloServer } from "apollo-server-express";
import { buildSchema } from 'type-graphql';
import { Server } from "http";
import * as path from "path";
import { Application } from "express"
import { UserResolver } from "./modules/user/user.resolver";
import { Container } from "typedi";

export const graphqlLoader = async (app: Application, expressServer: Server) => {
  const Schema = await buildSchema({
    resolvers: [UserResolver],
    container: Container,
    emitSchemaFile: path.resolve(__dirname, "./modules", "schema.gql")
  });
  const server = new ApolloServer({
    schema: Schema,
    playground: true
  });

  server.applyMiddleware({ app });
  server.installSubscriptionHandlers(expressServer);
}