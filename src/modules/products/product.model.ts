import { Schema, model, connect } from "mongoose";
import { Inventory, Product, Variant } from "./product.interface";

const VariantSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const InventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<Product>({
  name: { type: String, required: [true, "Name is required "] },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantSchema], required: true },
  inventory: { type: InventorySchema, required: true },
});

export const ProductModel = model<Product>("Product", productSchema);
