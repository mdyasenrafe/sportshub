import React, { useState } from "react";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import {
  Container,
  CustomButton,
  Text,
  TextVariant,
} from "../../components/atoms";
import { TProduct } from "../../types/productTypes";
import { SubmitHandler } from "react-hook-form";
import { FormInput, FormSelect, FormWrapper } from "../../components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userDetailsSchema } from "../../Schema/Schema";
import { paymentMethods } from "../../constant/paymentMethods";
import { colors } from "../../theme/color";
import { usePlaceOrderMutation } from "../../redux/features/order/orderApi";
import { useAppSelector } from "../../redux/hooks";
import { getCarts } from "../../redux/features/cart/cartSlice";

export const Checkout = () => {
  const [addOrder, { isLoading }] = usePlaceOrderMutation();
  const carts = useAppSelector(getCarts);
  const onSubmit: SubmitHandler<any> = async (data: TProduct) => {
    console.log(data);
  };
  return (
    <MainLayout>
      <Container>
        <section className="py-10">
          <div className="text-center mb-8">
            <Text variant={TextVariant.H1} className="text-center">
              Checkout
            </Text>
            <Text
              variant={TextVariant.P3}
              className="mt-[8px]"
              style={{ color: colors.darkGray }}
            >
              Complete your purchase by filling out your details below.
            </Text>
          </div>
          <FormWrapper
            onSubmit={onSubmit}
            resolver={zodResolver(userDetailsSchema)}
            defaultValues={{}}
          >
            <FormInput type="text" name="name" label="Name" />
            <FormInput type="text" name="email" label="Email" />
            <FormInput type="text" name="phoneNumber" label="Phone Number" />
            <FormInput type="text" name="address" label="Delivery" />
            <FormSelect
              name="paymentMethod"
              label="Select Payment Methods"
              options={paymentMethods}
            />
            <CustomButton
              colorKey="primary"
              htmlType="submit"
              className="w-full h-[48px] text-[18px] text-white"
              loading={isLoading}
              disabled={isLoading}
            >
              Place Order
            </CustomButton>
          </FormWrapper>
        </section>
      </Container>
    </MainLayout>
  );
};
