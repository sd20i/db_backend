import { Request, Response, Application } from "express";

const PostOrderCarEndpoint = (app: Application) => {
  app.post("/postOrderCar", (req: Request, res: Response) => {
    const { customer, order } = req.body;
    res.status(200).send({ customer: customer, order: order });
  });
};

export { PostOrderCarEndpoint };
