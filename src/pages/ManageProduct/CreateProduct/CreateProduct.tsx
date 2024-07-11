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
import { useCreateProductMutation } from "../../../redux/features/product/productApi";
import { toast } from "sonner";
import { useFormAction, useNavigate } from "react-router-dom";
import { TProduct } from "../../../types/productTypes";
import { ProductForm } from "../components/ProductForm";

export const CreateProduct = () => {
  const [imageUpload, { isLoading: imageLoading }] = useImageUploadMutation();
  const [addProduct, { isLoading }] = useCreateProductMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = async (data: TProduct) => {
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

      const res = await addProduct(data);
      toast.success("Product created succesfully");
      navigate("/manage-product/products");
    } catch (err) {
      console.error("Error uploading images: ", err);
    }
  };
  return (
    <MainLayout>
      <Container>
        <ProductForm
          initialProductValues={{}}
          onSubmit={onSubmit}
          isLoading={isLoading || imageLoading}
        />
      </Container>
    </MainLayout>
  );
};
