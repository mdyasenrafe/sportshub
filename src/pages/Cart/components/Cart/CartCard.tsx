import React from "react";
import { useDispatch } from "react-redux";
import { Col, Row } from "antd";
import { TCart } from "../../../../redux/features/cart/types";
import { Text, TextVariant } from "../../../../components/atoms";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { colors } from "../../../../theme/color";
import { toast } from "sonner";
import { updateCart } from "../../../../redux/features/cart/cartSlice"; // Adjust the import path if necessary

type CartCardProps = {
  cart: TCart;
};

export const CartCard: React.FC<CartCardProps> = ({ cart }) => {
  const dispatch = useDispatch();
  let toasterId: any;

  const increment = () => {
    if (cart.quantity < Number(cart.product.stockQuantity)) {
      dispatch(
        updateCart({
          productId: cart.product._id,
          quantity: cart.quantity + 1,
        })
      );
    } else {
      toasterId = toast.warning(
        "You cannot add more than the available stock.",
        { id: toasterId }
      );
    }
  };

  const decrement = () => {
    if (cart.quantity > 1) {
      dispatch(
        updateCart({
          productId: cart.product._id,
          quantity: cart.quantity - 1,
        })
      );
    } else {
      toasterId = toast.warning("The minimum quantity is 1.", {
        id: toasterId,
      });
    }
  };

  return (
    <div className="border-b border-b-[#e1e1e1] p-4">
      <Row justify="space-between">
        <Col>
          <Row gutter={12}>
            <Col>
              <img
                src={cart.product.thumb}
                className="w-[100px] h-[100px] rounded-md object-cover"
                alt={cart.product.productName}
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
                  {cart.quantity}
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
            ${cart.price}
          </Text>
        </Col>
      </Row>
    </div>
  );
};
