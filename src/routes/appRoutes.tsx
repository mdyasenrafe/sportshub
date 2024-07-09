import React from "react";
import {
  About,
  Cart,
  Checkout,
  Home,
  ManageProduct,
  Products,
  SingleProduct,
} from "../pages";

export type AppRoute = {
  id: number;
  name: string;
  path: string;
  component: React.ReactNode;
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
    component: <ManageProduct />,
    isNavItem: true,
    children: [
      {
        id: 4.1,
        name: "Products",
        path: "/manage-product/products",
        component: <Products />,
        isNavItem: false,
      },
      {
        id: 4.2,
        name: "Create New Product",
        path: "/manage-product/create",
        component: <Products />,
        isNavItem: false,
      },
    ],
  },
  {
    id: 5,
    name: "Single Product",
    path: "/single-product",
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
];
