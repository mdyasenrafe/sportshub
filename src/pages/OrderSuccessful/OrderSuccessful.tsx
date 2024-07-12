import React from "react";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import {
  Container,
  CustomButton,
  Text,
  TextVariant,
} from "../../components/atoms";
import { useNavigate } from "react-router-dom";

export const OrderSuccessful = () => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate("/");
  };
  return (
    <MainLayout>
      <Container>
        <section className="flex flex-col items-center justify-center h-screen">
          <div className="text-center">
            <img
              src="https://i.ibb.co/f0XtJ8s/succesfull.png"
              alt="Order Successful"
              className="mx-auto mb-4"
            />
            <Text variant={TextVariant.H1} className="mb-2">
              Thank you for ordering!
            </Text>
            <Text variant={TextVariant.P2} className="mb-6">
              Your order has been placed successfully. You will receive a
              confirmation email shortly with the details of your order and
              tracking information.
            </Text>
            <div className="flex justify-center">
              <CustomButton
                onClick={handleContinueShopping}
                colorKey="primary"
                className="text-white h-[48px] w-[200px] rounded-full font-poppins text-[16px]"
              >
                Continue Shopping
              </CustomButton>
            </div>
          </div>
        </section>
      </Container>
    </MainLayout>
  );
};
