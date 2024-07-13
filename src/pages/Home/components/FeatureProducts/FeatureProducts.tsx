import React from "react";
import { colors } from "../../../../theme/color";
import {
  Container,
  CustomButton,
  Text,
  TextVariant,
} from "../../../../components/atoms";
import { TProduct } from "../../../../types/productTypes";
import { Col, Flex, Row, Spin } from "antd";
import { ProductCard } from "../../../../components";
import { useGetProductsQuery } from "../../../../redux/features/product/productApi";
import { getProducts } from "../../../../redux/features/product/productSlice";
import { useAppSelector } from "../../../../redux/hooks";
import { Slide, Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

const featuredProducts: TProduct[] = [];
export const FeatureProducts = () => {
  const { data, isLoading } = useGetProductsQuery(
    { limit: 10, page: 1 },
    {
      pollingInterval: 3000,
    }
  );

  const featuredProducts = useAppSelector(getProducts);

  const navigate = useNavigate();

  return (
    <section className="py-40">
      <Container>
        <div>
          <div className="text-center mb-8">
            <Slide triggerOnce={true}>
              <Text variant={TextVariant.H1} className="text-center">
                Feature Products
              </Text>
            </Slide>
            <Fade delay={1e3} cascade damping={1e-1} triggerOnce={true}>
              <Text
                variant={TextVariant.P3}
                className="mt-[8px]"
                style={{ color: colors.darkGray }}
              >
                Discover our latest featured products and explore their unique
                features.
              </Text>
            </Fade>
          </div>
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
            <Row justify="center" gutter={[16, 16]}>
              {featuredProducts.map((product, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          )}
        </div>
        <div className="flex justify-center mt-8">
          <CustomButton
            colorKey="primary"
            onClick={() => navigate("/products")}
            className="text-white h-[40px] w-[232px] mt-4"
          >
            See More
          </CustomButton>
        </div>
      </Container>
    </section>
  );
};
