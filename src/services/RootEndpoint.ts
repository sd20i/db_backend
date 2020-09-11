import { Request, Response } from "express";

const RootEndpoint = (app: any) => {
  app.get("/", (_req: Request, res: Response) => {
    res.send("Root endpoint");
  });
};

export default RootEndpoint;
