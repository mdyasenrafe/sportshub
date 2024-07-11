import React from "react";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import { Container } from "../../components/atoms";
import { TProduct } from "../../types/productTypes";
import { SubmitHandler } from "react-hook-form";
import { FormInput, FormWrapper } from "../../components/form";
import { zodResolver } from "@hookform/resolvers/zod";

export const Checkout = () => {
  const onSubmit: SubmitHandler<any> = async (data: TProduct) => {};
  return (
    <MainLayout>
      <Container>
        <FormWrapper
          onSubmit={onSubmit}
          // resolver={zodResolver()}
          defaultValues={{}}
        >
          <FormInput type="text" name="productName" label="Product Name" />
          <FormInput type="text" name="productName" label="Email" />
          <FormInput type="text" name="productName" label="Product Name" />
        </FormWrapper>
      </Container>
    </MainLayout>
  );
};
