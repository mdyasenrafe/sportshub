import { MainLayout } from "../../../components/atoms/layout/MainLayout";
import { Container } from "../../../components/atoms";
import { SubmitHandler } from "react-hook-form";
import { useImageUploadMutation } from "../../../api/uploadApi";
import { useGetProductsByIdQuery } from "../../../redux/features/ProductApi";
import { useNavigate, useParams } from "react-router-dom";
import { TProduct } from "../../../types/productTypes";
import { ProductForm } from "../components/ProductForm";
import { Flex, Spin } from "antd";

export const EditProduct = () => {
  const [imageUpload, { isLoading: imageLoading }] = useImageUploadMutation();
  let { productId } = useParams();
  const { data: ProductData, isLoading } = useGetProductsByIdQuery(
    productId as string
  );

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<any> = async (data: TProduct) => {
    try {
      const initialProductValues = ProductData?.data as TProduct;
      if (data.thumb !== initialProductValues?.thumb) {
        const thumbRes = await imageUpload({ url: data.thumb }).unwrap();
        console.log(thumbRes);
        data.thumb = thumbRes?.data?.url;
      } else {
        data.thumb = initialProductValues?.thumb;
      }

      // Check if cover pictures have changed
      if (data.coverPictures && data.coverPictures.length > 0) {
        const coverPictureUrls = [...initialProductValues.coverPictures];

        const uploadPromises = data.coverPictures.map(
          async (base64Image, index) => {
            if (
              index >= coverPictureUrls.length ||
              base64Image !== coverPictureUrls[index]
            ) {
              const res = await imageUpload({ url: base64Image }).unwrap();
              coverPictureUrls[index] = res?.data?.url;
            }
          }
        );

        await Promise.all(uploadPromises);
        data.coverPictures = coverPictureUrls;
      } else {
        data.coverPictures = initialProductValues.coverPictures;
      }
      // const res = addProduct(data);
      // toast.success("Product created succesfully");
      navigate("/manage-product/products");
    } catch (err) {
      console.error("Error uploading images: ", err);
    }
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
            initialProductValues={ProductData?.data as TProduct}
            onSubmit={onSubmit}
            isLoading={false}
          />
        )}
      </Container>
    </MainLayout>
  );
};
