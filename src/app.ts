import express, { Application, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { ProductRoutes } from "./modules/products/product.route";
import { OrderRoutes } from "./modules/orders/order.route";
const port = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", ProductRoutes);
app.use("/api", OrderRoutes);

const getAController = (req: Request, res: Response) => {
  const a = "hello world";

  res.send(a);
};

app.get("/", getAController);

export default app;
