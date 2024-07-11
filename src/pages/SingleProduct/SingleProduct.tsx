import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetProductsByIdQuery } from "../../redux/features/product/productApi";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import {
  Container,
  CustomButton,
  Text,
  TextVariant,
} from "../../components/atoms";
import { Col, Flex, Rate, Row, Spin } from "antd";
import { colors } from "../../theme/color";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { toast } from "sonner";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useAppDispatch } from "../../redux/hooks";
import { addCart } from "../../redux/features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

export const SingleProduct = () => {
  let { productId } = useParams();
  const { data: productData, isLoading } = useGetProductsByIdQuery(
    productId as string
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // states
  const [count, setCount] = useState(1);
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(false);

  //

  useEffect(() => {
    // Update the disabled state whenever count or stock quantity changes
    if (productData) {
      setIsAddToCartDisabled(count > Number(productData.data.stockQuantity));
    }
  }, [count, productData]);

  let toasterId: any;

  const increment = () => {
    if (productData && count < Number(productData.data.stockQuantity)) {
      setCount((prevCount) => prevCount + 1);
    } else {
      toasterId = toast.warning(
        "You cannot add more than the available stock.",
        { id: toasterId }
      );
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    } else {
      toasterId = toast.warning("The minimum quantity is 1.", {
        id: toasterId,
      });
    }
  };

  const handleAddToCart = () => {
    if (productData) {
      const product = productData.data;
      dispatch(addCart({ product, quantity: count }));

      toast.success("Product added to cart!");
      navigate("/cart");
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
          <section>
            <Row className="bg-white border border-[#E1E1E1] rounded-lg p-4">
              <Col xs={24} md={12}>
                <div className="h-[400px] md:h-[600px] flex ">
                  <img
                    src={productData?.data.thumb}
                    className="rounded-lg h-full lg:w-[90%]"
                  />
                </div>
                <PhotoProvider
                  toolbarRender={({ onScale, scale }) => {
                    return (
                      <>
                        <svg
                          className="PhotoView-Slider__toolbarIcon"
                          onClick={() => onScale(scale + 1)}
                        />
                        <svg
                          className="PhotoView-Slider__toolbarIcon"
                          onClick={() => onScale(scale - 1)}
                        />
                      </>
                    );
                  }}
                >
                  <div className="flex relative w-[90%] overflow-y-scroll mt-4">
                    {productData?.data.coverPictures.map(
                      (image: string, index) => (
                        <PhotoView src={image}>
                          <img
                            style={{ objectFit: "cover" }}
                            src={image}
                            alt={`Cover ${index}`}
                            className="w-[100px] h-[100px] mr-6 object-cover rounded shadow-md cursor-pointer"
                          />
                        </PhotoView>
                      )
                    )}
                  </div>
                </PhotoProvider>
              </Col>
              <Col xs={24} md={12}>
                <div className="mb-4 pt-8">
                  <Text>
                    Availability:{" "}
                    <span
                      style={{
                        color: colors.primary,
                      }}
                    >
                      {productData?.data.stockQuantity} in stock
                    </span>
                  </Text>
                  <Text variant={TextVariant.H1} className="mb-2">
                    {productData?.data.productName}
                  </Text>
                  <Rate
                    allowHalf
                    disabled
                    defaultValue={Number(productData?.data.rating)}
                    className="my-2"
                  />
                  <Text
                    variant={TextVariant.H2}
                    className="mb-2"
                    style={{ color: colors.primary }}
                  >
                    ${productData?.data.price}
                  </Text>
                </div>
                <div>
                  <Text variant={TextVariant.P3}>
                    <strong>Category:</strong> {productData?.data.category}
                  </Text>
                  <Text variant={TextVariant.P3}>
                    <strong>Brand:</strong> {productData?.data.brand}
                  </Text>
                </div>
                <Row className="mt-12">
                  <Row align="middle" gutter={16}>
                    <Col>
                      <CustomButton
                        onClick={increment}
                        icon={<AiOutlinePlus />}
                      />
                    </Col>
                    <Col>
                      <span>{count}</span>
                    </Col>
                    <Col>
                      <CustomButton
                        onClick={decrement}
                        icon={<AiOutlineMinus />}
                        className="mr-8"
                      />
                    </Col>
                  </Row>
                  <CustomButton
                    colorKey="primary"
                    className="text-white h-[48px] w-[200px] rounded-full font-poppins text-[16px]"
                    disabled={isAddToCartDisabled}
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </CustomButton>
                </Row>
              </Col>
            </Row>
            <div className="bg-white border border-[#E1E1E1] rounded-lg p-4 mt-8">
              <Text variant={TextVariant.H4}>Description</Text>
              <Text variant={TextVariant.P4} className="mt-2">
                {productData?.data.description}
              </Text>
            </div>
          </section>
        )}
      </Container>
    </MainLayout>
  );
};
