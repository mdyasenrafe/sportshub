import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

const routerConfig = Routes.map((route) => ({
  path: route.path,
  element: route.component,
}));

export const router = createBrowserRouter(routerConfig);
