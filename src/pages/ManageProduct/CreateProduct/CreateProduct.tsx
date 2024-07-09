import React from "react";
import { MainLayout } from "../../../components/atoms/layout/MainLayout";
import {
  FormInput,
  FormSelect,
  FormWrapper,
  FormTextArea,
} from "../../../components/form";
import { Container, CustomButton } from "../../../components/atoms";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { BRAND_DATA } from "../../../constant/BrandData";
import { CATEGORIES_DATA_ARRAY } from "../../../constant/CategoriesData";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "../../../Schema/Schema";

export const CreateProduct = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <MainLayout>
      <Container>
        <FormWrapper
          onSubmit={onSubmit}
          resolver={zodResolver(createProductSchema)}
        >
          <FormInput type="text" name="productName" label="Product Name" />
          <FormTextArea name="description" label="Description" />
          <FormSelect
            name="category"
            label="Category"
            options={CATEGORIES_DATA_ARRAY}
          />
          <FormSelect name="brand" label="Brand" options={BRAND_DATA} />
          <FormInput
            type="number"
            name="stockQuantity"
            label="Stock Quantity"
          />
          <FormInput type="number" name="rating" label="Rating (0-5)" />
          <FormInput type="text" name="price" label="Price" />
          <FormInput
            type="text"
            name="images"
            label="Image URLs (comma-separated)"
          />
          <CustomButton
            colorKey="primary"
            htmlType="submit"
            className="w-full h-[48px] text-[18px] text-white"
          >
            Submit
          </CustomButton>
        </FormWrapper>
      </Container>
    </MainLayout>
  );
};
