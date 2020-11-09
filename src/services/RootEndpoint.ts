import { Request, Response, Application } from "express";

const RootEndpoint = (app: Application) => {
  app.get("/", async (_req: Request, res: Response) => {
    res.status(200).send("Root endpoint");
  });
};

export { RootEndpoint };
