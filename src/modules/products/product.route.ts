import express from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/products", productController.getAllProduct);
router.get("/products/:productId", productController.getSingleProduct);
router.delete("/products/:productId", productController.deleteSingleProduct);
router.put("/products/:productId", productController.updateSingleProduct);

export const ProductRoutes = router;
