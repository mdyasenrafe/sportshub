import React from "react";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import { Text, TextVariant } from "../../components/atoms";

export const Home = () => {
  return (
    <MainLayout>
      <Text variant={TextVariant.H1}>This is a heading 1 styled text</Text>
      <Text variant={TextVariant.P1}>This is a normal body text</Text>
      <Text className="hover:text-red-500" variant={TextVariant.P6}>
        This text changes color on hover
      </Text>
    </MainLayout>
  );
};
