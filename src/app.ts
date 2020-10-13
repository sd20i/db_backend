import express, { Application } from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import cors from "cors";
import { RootEndpoint } from "./services/RootEndpoint";
import {
  CarBodiesEndpoint,
  CarTiresEndpoint,
  WindowTypesEndpoint,
} from "./services/GetCarPartsEndpoint";
import { PostOrderCarEndpoint } from "./services/PostOrderCar";
const app: Application = express();
const PORT = process.env.PORT || 5000;

// parse json data in body
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// use res req types, set cors headers
app.use("*", function (
  _req: express.Request,
  res: express.Response,
  next: Function
) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
app.options("*", cors());

// app listen to default port or pot from .env
app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
});

// connecting endpoints to root, app has to be passed to access express
RootEndpoint(app);
CarBodiesEndpoint(app);
CarTiresEndpoint(app);
WindowTypesEndpoint(app);
PostOrderCarEndpoint(app);

export default app;
