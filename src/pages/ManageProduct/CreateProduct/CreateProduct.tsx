import { MainLayout } from "../../../components/atoms/layout/MainLayout";
import { Container } from "../../../components/atoms";
import { SubmitHandler } from "react-hook-form";
import { useImageUploadMutation } from "../../../api/uploadApi";
import { useCreateProductMutation } from "../../../redux/features/product/productApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
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

        if (thumbRes?.data?.url) {
          data.thumb = thumbRes.data.url;
        } else {
          toast.error("Something went wrong! pls try again");
          navigate("/");
        }
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

        data.coverPictures = await coverPictureUrls;
      }

      const bodyData = {
        ...data,
        stockQuantity: Number(data.stockQuantity),
      };

      // Call another API after all images are uploaded
      const res = await addProduct(bodyData);
      if (res.data) {
        toast.success("Product created successfully");
        navigate("/manage-product/products");
      } else {
        toast.error("Something went wrong! pls try again");
        navigate("/");
      }
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
