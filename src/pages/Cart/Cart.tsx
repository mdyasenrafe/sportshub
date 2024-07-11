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
import { Route, useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import { CartCard } from "./components/Cart";
import { TCart } from "../../redux/features/cart/types";
import { toast } from "sonner";

export const Cart = () => {
  const navigate = useNavigate();
  const carts = useAppSelector(getCarts);

  const calculateTotals = (carts: TCart[]) => {
    let subTotal = 0;
    let vat = 0;

    carts.forEach((cart) => {
      subTotal += cart.price;
      vat += cart.vat;
    });

    return { subTotal, vat, grandTotal: subTotal + vat };
  };

  const { subTotal, vat, grandTotal } = calculateTotals(carts);

  const handleCheckout = () => {
    let allItemsValid = true;

    carts.forEach((cart: TCart) => {
      if (Number(cart.quantity) > Number(cart.product.stockQuantity)) {
        allItemsValid = false;
        toast.warning(`Item ${cart.product.productName} exceeds stock limit.`);
      }
    });

    if (allItemsValid) {
      navigate("/checkout");
    }
  };

  return (
    <MainLayout>
      <Container>
        <section className="py-10">
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
            <Col xs={24} md={16} className="h-full">
              <div className="border border-[#E1E1E1] rounded-lg h-full">
                {carts.map((cart) => (
                  <CartCard cart={cart} key={cart.product._id} />
                ))}
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="border border-[#E1E1E1] rounded-lg p-4 mt-8 md:mt-0 h-full">
                <div className="flex justify-between">
                  <Text className="font-normal">Sub Total</Text>
                  <Text variant={TextVariant.H5}>${subTotal}</Text>
                </div>
                <div className="flex justify-between">
                  <Text className="font-normal">Vat</Text>
                  <Text variant={TextVariant.H5}>${vat}</Text>
                </div>{" "}
                <hr className="my-1" />
                <div className="flex justify-between">
                  <Text className="font-normal">Grand Total</Text>
                  <Text variant={TextVariant.H5}>${grandTotal}</Text>
                </div>
                <div className="mt-8">
                  <CustomButton
                    colorKey="primary"
                    className="text-white h-[48px] w-full rounded-full font-poppins text-[16px]"
                    onClick={handleCheckout}
                  >
                    Proced To Checkout
                  </CustomButton>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </MainLayout>
  );
};
