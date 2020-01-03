import express from "express";
import bodyParser from "body-parser";
import "./configs/environment";
import "./db/mongoose";
import { routes } from "./routes";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes.map(route => app.use(route.path, route.handler));

app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}`);
  console.log(`Environment : ${process.env.NODE_ENV}`);
});
