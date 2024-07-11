import { z } from "zod";

export const createProductSchema = z.object({
  productName: z
    .string()
    .min(1, { message: "Product name is required" })
    .max(100, { message: "Product name must not exceed 100 characters" }),
  description: z
    .string()
    .min(20, { message: "Description must be at least 20 characters long" })
    .max(2000, { message: "Description must not exceed 2000 characters" }),
  category: z.string().min(1, { message: "Category is required" }),
  brand: z.string().min(1, { message: "Brand is required" }),
  stockQuantity: z
    .string()
    .regex(/^\d+(\.\d+)?$/, {
      message: "Stock quantity must be a valid number",
    })
    .transform((val) => {
      const floored = Math.floor(parseFloat(val));
      if (!Number.isInteger(floored)) {
        throw new Error("Stock quantity must be an integer");
      }
      return floored.toString();
    }),
  rating: z.string().regex(/^[0-5](\.[0-9]+)?$/, {
    message: "Rating must be a number between 0 and 5",
  }),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, { message: "Enter a valid price" }),
  thumb: z.string(),
  coverPictures: z.array(z.string()),
});

export const userDetailsSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Delivery address is required"),
  paymentMethod: z.string().min(1, { message: "Category is required" }),
});
