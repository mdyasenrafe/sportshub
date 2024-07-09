import React from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { MainLayoutProps } from "./type";
import { Container } from "../../Container";

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};
