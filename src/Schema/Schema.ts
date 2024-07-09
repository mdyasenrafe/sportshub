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
    .number()
    .min(0, { message: "Stock quantity cannot be negative" })
    .max(10000, { message: "Stock quantity must be reasonable" }),
  rating: z
    .number()
    .min(0, { message: "Rating must be at least 0" })
    .max(5, { message: "Rating must not exceed 5" }),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Enter a valid price" }),
  images: z
    .array(z.string())
    .min(1, { message: "At least one image is required" }),
});
