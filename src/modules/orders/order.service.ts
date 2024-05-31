import { ProductModel } from "../products/product.model";
import { Order } from "./order.interface";
import { Ordermodel } from "./order.model";

const createOrder = async (orderData: Order) => {
  const result = await Ordermodel.create(orderData);
  return result;
};

const getAllOrderFromDb = async () => {
  const result = await Ordermodel.find();
  return result;
};
const getEmailOrderFromDb = async (email: string) => {
  const result = await Ordermodel.find({ email: email });
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrderFromDb,
  getEmailOrderFromDb,
};
