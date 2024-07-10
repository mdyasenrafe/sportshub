import React, { useState } from "react";
import { Button, Card, Modal, Rate } from "antd";
import { TProduct } from "../../types/productTypes";
import { truncateText } from "../../utils/truncateText";
import { CustomButton, Text, TextVariant } from "../atoms";
import { FaEdit, FaTrash } from "react-icons/fa";
import { colors } from "../../theme/color";

interface ProductCardProps {
  product: TProduct;
  editOption?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  editOption,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onEdit = () => {};
  const onDelete = (id: string) => {};
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    // Call the onDelete function passed as a prop
    onDelete(product._id);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Card
      style={{ width: "100%", height: "100%" }}
      hoverable
      cover={
        <img
          alt={product.productName}
          src={product.thumb}
          className="h-full object-contain"
        />
      }
      className="border rounded-lg shadow-lg flex flex-col"
    >
      <Card.Meta
        title={<Text variant={TextVariant.H5}>{product.productName}</Text>}
        description={
          <>
            <Text variant={TextVariant.P2}>
              <strong>Category:</strong> {product.category}
            </Text>
            <Text variant={TextVariant.P2}>
              <strong>Brand:</strong> {product.brand}
            </Text>
            <Text variant={TextVariant.P2}>
              <strong>Stock:</strong> {product.stockQuantity} units
            </Text>
            <Rate
              allowHalf
              disabled
              defaultValue={Number(product.rating)}
              className="my-2"
            />
            <Text variant={TextVariant.P4} className="text-gray-600 my-1">
              {truncateText(product.description, 30)}
            </Text>
            <Text variant={TextVariant.H4} className="font-bold my-1">
              {product.price}
            </Text>
            {editOption ? (
              <div className="flex space-x-2 mt-3">
                <CustomButton
                  colorKey="primary"
                  htmlType="button"
                  className="h-[30px] text-[18px] text-white"
                  onClick={onEdit}
                >
                  Edit
                </CustomButton>
                <CustomButton
                  colorKey="danger"
                  htmlType="button"
                  className="h-[30px] text-[18px] text-white hover:border-red-500"
                  onClick={showModal}
                >
                  Delete
                </CustomButton>
              </div>
            ) : (
              <CustomButton
                colorKey="primary"
                htmlType="submit"
                className="h-[30px] text-[18px] text-white mt-3"
              >
                Buy Now
              </CustomButton>
            )}
          </>
        }
      />
      <Modal
        title="Delete Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <CustomButton key="back" onClick={handleCancel}>
            No
          </CustomButton>,
          <CustomButton
            key="submit"
            colorKey="primary"
            onClick={handleOk}
            className="text-white "
          >
            Yes
          </CustomButton>,
        ]}
      >
        <p>Are you sure you want to delete this product?</p>
      </Modal>
    </Card>
  );
};
