import { SubmitHandler } from "react-hook-form";
import {
  FormInput,
  FormSelect,
  FormTextArea,
  FormUpload,
  FormWrapper,
} from "../../../../components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "../../../../Schema/Schema";
import { BRAND_DATA } from "../../../../constant/BrandData";
import { CATEGORIES_DATA_ARRAY } from "../../../../constant/CategoriesData";
import { CustomButton } from "../../../../components/atoms";
import { TProduct } from "../../../../types/productTypes";

interface ProductFormProps {
  initialProductValues: Partial<TProduct>;
  onSubmit: SubmitHandler<any>;
  isLoading: boolean;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  initialProductValues,
  onSubmit,
  isLoading,
}) => {
  return (
    <FormWrapper
      onSubmit={onSubmit}
      resolver={zodResolver(createProductSchema)}
      defaultValues={initialProductValues}
    >
      <FormInput type="text" name="productName" label="Product Name" />
      <FormTextArea name="description" label="Description" />
      <FormSelect
        name="category"
        label="Category"
        options={CATEGORIES_DATA_ARRAY}
      />
      <FormSelect name="brand" label="Brand" options={BRAND_DATA} />
      <FormInput type="number" name="stockQuantity" label="Stock Quantity" />
      <FormInput type="number" name="rating" label="Rating (0-5)" />
      <FormInput type="number" name="price" label="Price" />
      <FormUpload name="thumb" label="Upload Profile Image" />
      <FormUpload name="coverPictures" multiple={true} label="Cover Pictures" />

      <CustomButton
        colorKey="primary"
        htmlType="submit"
        className="w-full h-[48px] text-[18px] text-white"
        loading={isLoading}
        disabled={isLoading}
      >
        Submit
      </CustomButton>
    </FormWrapper>
  );
};
