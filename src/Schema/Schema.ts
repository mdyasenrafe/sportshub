import { z } from "zod";

export const createProductSchema = z.object({
  productName: z
    .string()
    .min(1, { message: "Product name is required" })
    .max(100, { message: "Product name must not exceed 100 characters" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters long" })
    .max(500, { message: "Description must not exceed 500 characters" }),
  category: z.string().min(1, { message: "Category is required" }),
  brand: z.string().min(1, { message: "Brand is required" }),
  stockQuantity: z
    .string()
    .min(1, { message: "Stock is required" })
    .max(10000, { message: "Stock quantity must be reasonable" }),
  rating: z.string().min(1, { message: "Rating is required" }),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Enter a valid price" }),
  thumb: z.any(),
});
