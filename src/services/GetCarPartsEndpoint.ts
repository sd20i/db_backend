import { Request, Response, Application } from "express";
import GetProductsByTypeId from "../requests/GetCarPartRequests";
// Get array of car bodies
const CarBodiesEndpoint = (app: Application) => {
  app.post("/getCarBodies", async (req: Request, res: Response) => {
    const { typeId } = req.body;
    // run query function
    const productList = await GetProductsByTypeId(typeId);
    res.status(200).json({ bodies: productList });
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
