import { createBrowserRouter } from "react-router-dom";
import { Routes, TRoute } from "./routes";

// Helper function to convert TRoute to route config format
const convertToRouteConfig = (route: TRoute) => {
  const config: any = {
    path: route.path,
    element: route.component,
  };

  if (route.children) {
    config.children = route.children.map(convertToRouteConfig);
  }

  return config;
};

const routerConfig = Routes.map(convertToRouteConfig);

export const router = createBrowserRouter(routerConfig);
