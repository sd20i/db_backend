import { Request, Response, Application } from "express";

// use underscore to ignore unused parameters, req is required, but not used
const RootEndpoint = (app: Application) => {
  app.get("/", (_req: Request, res: Response) => {
    res.send("Root endpoint");
  });
};

export default RootEndpoint;
