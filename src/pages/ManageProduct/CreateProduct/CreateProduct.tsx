import { MainLayout } from "../../../components/atoms/layout/MainLayout";
import {
  FormInput,
  FormSelect,
  FormWrapper,
  FormTextArea,
  FormUpload,
} from "../../../components/form";
import { Container, CustomButton } from "../../../components/atoms";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { BRAND_DATA } from "../../../constant/BrandData";
import { CATEGORIES_DATA_ARRAY } from "../../../constant/CategoriesData";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "../../../Schema/Schema";
import { useImageUploadMutation } from "../../../api/uploadApi";
import { useCreateProductMutation } from "../../../redux/features/ProductApi";
import { toast } from "sonner";
import { useFormAction, useNavigate } from "react-router-dom";

type TFormValues = {
  productName: string;
  description: string;
  category: string;
  stockQuantity: string;
  rating: string;
  price: string;
  thumb: string;
  coverPictures: string[];
};

export const CreateProduct = () => {
  const [imageUpload, { isLoading: imageLoading }] = useImageUploadMutation();
  const [addProduct, { isLoading }] = useCreateProductMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = async (data: TFormValues) => {
    try {
      // Handle thumb image upload
      if (data.thumb) {
        const thumbRes = await imageUpload({ url: data.thumb }).unwrap();
        console.log(thumbRes);
        data.thumb = thumbRes?.data?.url;
      }

      // Handle cover pictures upload
      if (data.coverPictures && data.coverPictures.length > 0) {
        const uploadPromises = data.coverPictures.map((base64Image) =>
          imageUpload({ url: base64Image }).unwrap()
        );

        const coverPictureResults = await Promise.all(uploadPromises);
        const coverPictureUrls = coverPictureResults.map(
          (res) => res?.data?.url
        );

        data.coverPictures = coverPictureUrls;
      }

      const res = addProduct(data);
      toast.success("Product created succesfully");
      navigate("/manage-product/products");
    } catch (err) {
      console.error("Error uploading images: ", err);
    }
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
          <FormInput type="number" name="price" label="price" />
          <FormUpload name="thumb" label="Upload Profile Image" />
          <FormUpload
            name="coverPictures"
            multiple={true}
            label="Cover Pictures"
          />

          <CustomButton
            colorKey="primary"
            htmlType="submit"
            className="w-full h-[48px] text-[18px] text-white"
            loading={imageLoading || isLoading}
            disabled={imageLoading || isLoading}
          >
            Submit
          </CustomButton>
        </FormWrapper>
      </Container>
    </MainLayout>
  );
};
