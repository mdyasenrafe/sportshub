import React from "react";
import { MainLayout } from "../../../components/atoms/layout/MainLayout";
import { Container, Text, TextVariant } from "../../../components/atoms";
import { colors } from "../../../theme/color";
import { Col, Flex, Row, Spin } from "antd";
import { ProductCard } from "../../../components";
import { useGetProductsQuery } from "../../../redux/features/product/productApi";
import { useAppSelector } from "../../../redux/hooks";
import { getProducts } from "../../../redux/features/product/productSlice";

export const ManageProducts = () => {
  const { data, isLoading } = useGetProductsQuery({ page: 1, limit: 100 });

  const featuredProducts = useAppSelector(getProducts);

  return (
    <MainLayout>
      <section className="py-10">
        <Container>
          <div>
            <div className="text-center mb-8">
              <Text variant={TextVariant.H1} className="text-center">
                Manage Products
              </Text>
              <Text
                variant={TextVariant.P3}
                className="mt-[8px]"
                style={{ color: colors.darkGray }}
              >
                Here you can view, edit, or delete products listed on the
                platform. Use the controls below to manage product inventory
                effectively.
              </Text>
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
                    <ProductCard product={product} editOption={true} />
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};
