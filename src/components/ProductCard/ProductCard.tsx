import React, { useState } from "react";
import { Button, Card, Modal, Rate } from "antd";
import { TProduct } from "../../types/productTypes"; // Assuming you have defined this type
import { truncateText } from "../../utils/truncateText";
import { CustomButton, Text, TextVariant } from "../atoms";
import { useNavigate } from "react-router-dom";
import { useDeleteProductMutation } from "../../redux/features/product/productApi";
import { SyntheticEvent } from "react"; // Import SyntheticEvent for event typing
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { toast } from "sonner";

interface ProductCardProps {
  product: TProduct;
  editOption?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  editOption,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();

  const onEdit = (event: SyntheticEvent, id: string) => {
    event.stopPropagation();
    navigate(`/manage-product/edit/${id}`);
  };

  const onDelete = async (id: string) => {
    try {
      const res = await deleteProduct(id).unwrap();
      toast.success("Product deleted successfully");
    } catch (err: any) {
      toast.error(err.error.message || "Something went wrong");
    }
  };

  const showModal = (event: SyntheticEvent) => {
    event.stopPropagation();
    setIsModalVisible(true);
  };

  const handleOk = (event: SyntheticEvent) => {
    event.stopPropagation();
    setIsModalVisible(false);
    onDelete(product._id);
  };

  const handleCancel = (event: SyntheticEvent) => {
    event.stopPropagation();
    setIsModalVisible(false);
  };

  return (
    <div onClick={() => navigate(`/single-product/${product._id}`)}>
      <Card
        hoverable
        cover={
          <img
            alt={product.productName}
            src={product.thumb}
            className="h-48 object-cover w-full"
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
                ${product.price}
              </Text>
              {editOption ? (
                <div className="flex space-x-2 mt-3">
                  <CustomButton
                    colorKey="primary"
                    htmlType="button"
                    className="h-[37px] text-[16px] text-white mt-3 font-poppins"
                    onClick={(e) => onEdit(e, product._id)}
                  >
                    Edit
                  </CustomButton>
                  <CustomButton
                    colorKey="danger"
                    htmlType="button"
                    className="h-[37px] text-[16px] text-white mt-3 font-poppins"
                    onClick={showModal}
                  >
                    Delete
                  </CustomButton>
                </div>
              ) : (
                <CustomButton
                  colorKey="primary"
                  htmlType="submit"
                  className="h-[37px] text-[16px] text-white mt-3 font-poppins"
                >
                  Buy Now
                </CustomButton>
              )}
            </>
          }
        />
        <Modal
          title="Are you sure?"
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
              className="text-white"
            >
              Yes
            </CustomButton>,
          ]}
        >
          <p>Are you sure you want to delete this product?</p>
        </Modal>
      </Card>
    </div>
  );
};
