import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;
    const result = await ProductServices.createProductIntoDb(productData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductFromDb();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const result = await ProductServices.getSingleProductFromDb(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const result = await ProductServices.deleteProductFromDb(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const result = await ProductServices.updateProductFromDb(productId);
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
