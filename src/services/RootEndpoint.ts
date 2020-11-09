import { Request, Response, Application } from "express";
import { fetchProduct } from "../mysqlModels/Products";

const RootEndpoint = (app: Application) => {
  app.get("/", async (_req: Request, res: Response) => {
    try {
      let answer = await fetchProduct();
      res.json({ fetchProduct: answer });
    } catch (err) {
      res.json({ error: "some error" });
    }
  });
};

export { RootEndpoint };
