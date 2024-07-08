import {
  About,
  Cart,
  Home,
  ManageProduct,
  Porducts,
  SingleProduct,
} from "../pages";

export type TRoute = {
  id: number;
  name: string;
  path: string;
  component: string;
  nav: boolean;
};

export const Routes = [
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
    nav: true, // Include in Navbar
  },
  {
    id: 3,
    name: "Products",
    path: "/products",
    component: <Porducts />,
    nav: true, // Include in Navbar
  },
  {
    id: 4,
    name: "Manage Product",
    path: "/manage-product",
    component: <ManageProduct />,
    nav: true, // Include in Navbar
  },
  {
    id: 5,
    name: "Single Product",
    path: "/single-product",
    component: <SingleProduct />,
    nav: false, // Exclude from Navbar
  },
  {
    id: 6,
    name: "cart",
    path: "/cart",
    component: <Cart />,
    nav: true,
  },
  {
    id: 7,
    name: "Checkout",
    path: "/checkout",
    component: <Cart />,
    nav: false,
  },
];
