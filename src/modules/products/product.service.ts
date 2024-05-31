import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDb = async (productData: Product) => {
  const result = await ProductModel.create(productData);
  return result;
};

const getAllProductFromDb = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDb = async (id: string) => {
  const result = await ProductModel.findOne({ id });
  return result;
};
const deleteProductFromDb = async (id: string) => {
  const result = await ProductModel.findOneAndDelete({ _id: id });
  return result;
};
const updateProductFromDb = async (id: string) => {
  const oldProduct = await ProductModel.findById(id);
  const result = oldProduct?.updateOne({ name: "xiaomi" });
  return result;
};

export const ProductServices = {
  createProductIntoDb,
  getAllProductFromDb,
  getSingleProductFromDb,
  deleteProductFromDb,
  updateProductFromDb,
};
