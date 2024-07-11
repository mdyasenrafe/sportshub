import { Col, Row } from "antd";
import React, { useState } from "react";
import { TCart } from "../../../../redux/features/cart/types";
import { Text, TextVariant } from "../../../../components/atoms";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { colors } from "../../../../theme/color";
import { toast } from "sonner";

type CartCardProps = {
  cart: TCart;
};

export const CartCard: React.FC<CartCardProps> = ({ cart }) => {
  const [count, setCount] = useState<number>(cart.quantity);
  let toasterId: any;

  const increment = () => {
    if (count < Number(cart.product.stockQuantity)) {
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
  return (
    <div className="border border-[#E1E1E1] rounded-lg p-4">
      <Row justify="space-between">
        <Col>
          <Row gutter={12}>
            <Col>
              <img
                src={cart.product.thumb}
                className="w-[100px] h-[100px] rounded-md object-cover"
              />
            </Col>
            <Col>
              <Text variant={TextVariant.H3}>{cart.product.productName}</Text>
              <div className="border border-[#e1e1e1] flex items-center w-[100px] py-1 rounded-md  justify-around mt-2">
                <div
                  className="w-[33%] flex justify-center cursor-pointer"
                  onClick={increment}
                >
                  <AiOutlinePlus className="text-[24px] text-[#ff4d4f]" />
                </div>
                <span className="w-[33%] flex justify-center text-[18px]">
                  {count}
                </span>
                <div
                  className="w-[33%] flex justify-center text-[18px] cursor-pointer"
                  onClick={decrement}
                >
                  <AiOutlineMinus className="text-[24px] text-[#ff4d4f]" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
          <Text
            variant={TextVariant.H4}
            style={{
              color: colors.primary,
            }}
          >
            ${cart.product.price}
          </Text>
        </Col>
      </Row>
    </div>
  );
};
