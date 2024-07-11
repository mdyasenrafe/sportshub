import React from "react";
import { About, Cart, Checkout, Home, Products, SingleProduct } from "../pages";
import {
  CreateProduct,
  EditProduct,
  ManageProducts,
} from "../pages/ManageProduct";

export type AppRoute = {
  id: number;
  name: string;
  path: string;
  component?: React.ReactNode;
  isNavItem: boolean;
  children?: AppRoute[];
};

export const appRoutes: AppRoute[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
    component: <Home />,
    isNavItem: true,
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    component: <About />,
    isNavItem: true,
  },
  {
    id: 3,
    name: "Products",
    path: "/products",
    component: <Products />,
    isNavItem: true,
  },
  {
    id: 6,
    name: "Cart",
    path: "/cart",
    component: <Cart />,
    isNavItem: true,
  },
  {
    id: 4,
    name: "Manage Product",
    path: "/manage-product",
    isNavItem: true,
    children: [
      {
        id: 4.1,
        name: "Products",
        path: "/manage-product/products",
        component: <ManageProducts />,
        isNavItem: false,
      },
      {
        id: 4.2,
        name: "Create New Product",
        path: "/manage-product/create",
        component: <CreateProduct />,
        isNavItem: false,
      },
    ],
  },
  {
    id: 5,
    name: "Single Product",
    path: "/single-product/:productId",
    component: <SingleProduct />,
    isNavItem: false,
  },
  {
    id: 7,
    name: "Checkout",
    path: "/checkout",
    component: <Checkout />,
    isNavItem: false,
  },
  {
    id: 8,
    name: "Edit Product",
    path: "manage-product/edit/:productId",
    component: <EditProduct />,
    isNavItem: false,
  },
];
