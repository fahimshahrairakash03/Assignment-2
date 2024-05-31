import express from "express";
import { orderController } from "./order.controller";

const router = express.Router();

router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getOrder);
router.get("/orders", orderController.getEmailedOrder);

export const OrderRoutes = router;
