export interface TOrder {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  products: { productId: string; quantity: number }[];
}
