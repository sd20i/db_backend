import { Request, Response, Application } from "express";

// Get array of car bodies
const CarBodiesEndpoint = (app: Application) => {
  app.get("/getCarBodies", (_req: Request, res: Response) => {
    res.status(200).json({ bodies: [] });
  });
};

// Get array of tires
const CarTiresEndpoint = (app: Application) => {
  app.get("/getTires", (_req: Request, res: Response) => {
    res.status(200).json({ tires: [] });
  });
};

// Get array of window types
const WindowTypesEndpoint = (app: Application) => {
  app.get("/getWindowTypes", (_req: Request, res: Response) => {
    res.status(200).json({ windowTypes: [] });
  });
};

export { CarBodiesEndpoint, CarTiresEndpoint, WindowTypesEndpoint }; // CarTiresEndpoint, WindowTypesEndpoint
