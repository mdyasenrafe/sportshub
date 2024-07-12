import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Col, Modal, Row } from "antd";
import { TCart } from "../../../../redux/features/cart/types";
import { Text, TextVariant } from "../../../../components/atoms";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { colors } from "../../../../theme/color";
import { toast } from "sonner";
import {
  deleteCart,
  updateCart,
} from "../../../../redux/features/cart/cartSlice"; // Adjust the import path if necessary

type CartCardProps = {
  cart: TCart;
};

export const CartCard: React.FC<CartCardProps> = ({ cart }) => {
  const dispatch = useDispatch();
  let toasterId: any;
  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const showDeleteModal = () => {
    setIsModalVisible(true);
  };

  const handleDelete = () => {
    dispatch(deleteCart({ productId: cart.product._id }));
    setIsModalVisible(false);
    toast.success("Product removed from cart.");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="border-b border-b-[#e1e1e1] p-4">
      <Row justify={"space-between"}>
        <Col xs={20}>
          <Row gutter={12}>
            <Col xs={8} lg={4}>
              <img
                src={cart.product.thumb}
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-md object-cover"
                alt={cart.product.productName}
              />
            </Col>
            <Col xs={16} lg={20}>
              <Text
                variant={TextVariant.H3}
                className="text-[18px] md:text-2xl font-bold font-figtree"
              >
                {cart.product.productName}
              </Text>
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
        <Col xs={4}>
          <Text
            variant={TextVariant.H4}
            style={{
              color: colors.primary,
            }}
          >
            ${cart.price}
          </Text>
          <Text
            variant={TextVariant.P6}
            className="cursor-pointer"
            onClick={showDeleteModal}
          >
            Remove Product
          </Text>
        </Col>
      </Row>
      <Modal
        title="Confirm Delete"
        visible={isModalVisible}
        onOk={handleDelete}
        onCancel={handleCancel}
        okText="Yes"
        cancelText="No"
      >
        <p>Are you sure you want to remove this product from the cart?</p>
      </Modal>
    </div>
  );
};
