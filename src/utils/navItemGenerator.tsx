import React from "react";
import { Routes, TRoute } from "../routes/routes";
import { Link } from "react-router-dom";

type TNavbar = {
  label: React.ReactNode;
  key: string;
  children?: TNavbar[];
};

export const navItemsGenerator = (paths: TRoute[]): TNavbar[] => {
  return paths.reduce((acc: TNavbar[], item: TRoute) => {
    if (item.nav && !item.children) {
      acc.push({
        label: <Link to={item.path}>{item.name}</Link>,
        key: item.path,
      });
    }

    if (item.children && item.nav) {
      acc.push({
        key: item.path,
        label: <span>{item.name}</span>,
        children: item.children.map((child) => ({
          key: child.path,
          label: <Link to={child.path}>{child.name}</Link>,
        })),
      });
    }
    return acc;
  }, []);
};
