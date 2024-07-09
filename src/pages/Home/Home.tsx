import React from "react";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import { Button } from "antd";
import { Category, Contact, FeatureProducts, HeroSection } from "./components";

export const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeatureProducts />
      <Category />
      <Contact />
    </MainLayout>
  );
};
