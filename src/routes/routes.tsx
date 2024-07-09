import React from "react";
import {
  About,
  Cart,
  Home,
  ManageProduct,
  Products,
  SingleProduct,
} from "../pages";

export type TRoute = {
  id: number;
  name: string;
  path: string;
  component: React.ReactNode;
  nav: boolean;
  children?: TRoute[];
};

export const Routes: TRoute[] = [
  {
    id: 1,
    name: "Home",
    path: "/",
    component: <Home />,
    nav: true,
  },
  {
    id: 2,
    name: "About",
    path: "/about",
    component: <About />,
    nav: true,
  },
  {
    id: 3,
    name: "Products",
    path: "/products",
    component: <Products />,
    nav: true,
  },
  {
    id: 6,
    name: "Cart",
    path: "/cart",
    component: <Cart />,
    nav: true,
  },
  {
    id: 4,
    name: "Manage Product",
    path: "/manage-product",
    component: <ManageProduct />,
    nav: true,
    children: [
      {
        id: 4.1,
        name: "Products",
        path: "/manage-product/products",
        component: <Products />,
        nav: false,
      },
      {
        id: 4.2,
        name: "Create New Product",
        path: "/manage-product/create",
        component: <Products />,
        nav: false,
      },
    ],
  },
  {
    id: 5,
    name: "Single Product",
    path: "/single-product",
    component: <SingleProduct />,
    nav: false,
  },

  {
    id: 7,
    name: "Checkout",
    path: "/checkout",
    component: <Cart />,
    nav: false,
  },
];
