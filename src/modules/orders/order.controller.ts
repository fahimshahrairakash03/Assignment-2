import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body.order;
    const result = await OrderServices.createOrder(orderData);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrderFromDb();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getEmailedOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;

    const result = await OrderServices.getEmailOrderFromDb(email);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const orderController = {
  createOrder,
  getOrder,
  getEmailedOrder,
};
