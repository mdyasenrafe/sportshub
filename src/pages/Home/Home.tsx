import React from "react";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import { Button } from "antd";
import { HeroSection } from "./components";
import { Category } from "./components/Category";

export const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <Category />
    </MainLayout>
  );
};
