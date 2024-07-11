import React, { useState } from "react";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import {
  Container,
  CustomButton,
  Text,
  TextVariant,
} from "../../components/atoms";
import { getCarts } from "../../redux/features/cart/cartSlice";
import { useAppSelector } from "../../redux/hooks";
import { colors } from "../../theme/color";
import { Route } from "react-router-dom";
import { Col, Row } from "antd";
import { CartCard } from "./components/Cart";

export const Cart = () => {
  const carts = useAppSelector(getCarts);

  return (
    <MainLayout>
      <Container>
        <section className="py-20">
          <div>
            <div className="text-center mb-8">
              <Text variant={TextVariant.H1} className="text-center"></Text>
              <Text
                variant={TextVariant.P3}
                className="mt-[8px]"
                style={{ color: colors.darkGray }}
              ></Text>
            </div>
          </div>
          <Row gutter={24}>
            <Col xs={24} md={16}>
              <div>
                {carts.map((cart) => (
                  <CartCard cart={cart} key={cart.product._id} />
                ))}
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="border border-[#E1E1E1] rounded-lg p-4"></div>
            </Col>
          </Row>
        </section>
      </Container>
    </MainLayout>
  );
};
