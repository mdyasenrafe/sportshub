import React from "react";
import { MainLayout } from "../../../components/atoms/layout/MainLayout";
import { Container, Text, TextVariant } from "../../../components/atoms";
import { TProduct } from "../../../types/productTypes";
import { colors } from "../../../theme/color";
import { Col, Row } from "antd";
import { ProductCard } from "../../../components";
import { useGetProductsQuery } from "../../../redux/features/ProductApi";
import { useAppSelector } from "../../../redux/hooks";
import { getProducts } from "../../../redux/features/ProductSlice";

export const ManageProducts = () => {
  const { data, isLoading } = useGetProductsQuery();

  const featuredProducts = useAppSelector(getProducts);

  return (
    <MainLayout>
      <Container>
        <section className="py-10 relative">
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
              <Row justify="center" gutter={[16, 16]}>
                {featuredProducts.map((product, index) => (
                  <Col key={index} xs={24} sm={12} md={8} lg={6}>
                    <ProductCard product={product} />
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>
      </Container>
    </MainLayout>
  );
};
