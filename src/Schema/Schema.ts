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
    .regex(/^\d+$/, { message: "Stock quantity must be a valid number" }),
  rating: z
    .string()
    .regex(/^[0-5](\.[0-9]+)?$/, {
      message: "Rating must be a number between 0 and 5",
    }),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Enter a valid price" }),
  thumb: z
    .string()
    .url({ message: "Thumbnail must be a valid URL" })
    .optional(),
  coverPictures: z
    .array(
      z.string().url({ message: "Each cover picture must be a valid URL" })
    )
    .optional(),
});
