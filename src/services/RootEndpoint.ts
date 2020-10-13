import { Request, Response, Application } from "express";

const RootEndpoint = (app: Application) => {
  app.get("/", (_req: Request, res: Response) => {
    res.json({ endpoint: "Root endpoint" });
  });
};

export { RootEndpoint };
