import { MainLayout } from "../../../components/atoms/layout/MainLayout";
import { Container, CustomButton } from "../../../components/atoms";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { BRAND_DATA } from "../../../constant/BrandData";
import { CATEGORIES_DATA_ARRAY } from "../../../constant/CategoriesData";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProductSchema } from "../../../Schema/Schema";
import { useImageUploadMutation } from "../../../api/uploadApi";
import {
  useCreateProductMutation,
  useGetProductsByIdQuery,
} from "../../../redux/features/ProductApi";
import { toast } from "sonner";
import { useFormAction, useNavigate, useParams } from "react-router-dom";
import { TProduct } from "../../../types/productTypes";
import { ProductForm } from "../components/ProductForm";
import { Flex, Spin } from "antd";

export const EditProduct = () => {
  const [imageUpload, { isLoading: imageLoading }] = useImageUploadMutation();
  let { productId } = useParams();
  const { data, isLoading } = useGetProductsByIdQuery(productId as string);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = async (data: TProduct) => {
    // try {
    //   // Handle thumb image upload
    //   if (data.thumb) {
    //     const thumbRes = await imageUpload({ url: data.thumb }).unwrap();
    //     console.log(thumbRes);
    //     data.thumb = thumbRes?.data?.url;
    //   }
    //   // Handle cover pictures upload
    //   if (data.coverPictures && data.coverPictures.length > 0) {
    //     const uploadPromises = data.coverPictures.map((base64Image) =>
    //       imageUpload({ url: base64Image }).unwrap()
    //     );
    //     const coverPictureResults = await Promise.all(uploadPromises);
    //     const coverPictureUrls = coverPictureResults.map(
    //       (res) => res?.data?.url
    //     );
    //     data.coverPictures = coverPictureUrls;
    //   }
    //   const res = addProduct(data);
    //   toast.success("Product created succesfully");
    //   navigate("/manage-product/products");
    // } catch (err) {
    //   console.error("Error uploading images: ", err);
    // }
  };
  return (
    <MainLayout>
      <Container>
        {isLoading ? (
          <div>
            <Flex
              align="center"
              gap="middle"
              justify="center"
              className="h-[200px]"
            >
              <Spin size="large" />
            </Flex>
          </div>
        ) : (
          <ProductForm
            initialProductValues={data?.data as TProduct}
            onSubmit={onSubmit}
            isLoading={false}
          />
        )}
      </Container>
    </MainLayout>
  );
};
