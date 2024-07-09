import React from "react";
import { Card, Rate } from "antd";
import { TProduct } from "../../types/productTypes";
import { truncateText } from "../../utils/truncateText";
import { CustomButton, Text, TextVariant } from "../atoms";

interface ProductCardProps {
  product: TProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card
      style={{ width: "100%", height: "100%" }}
      hoverable
      cover={
        <img
          alt={product.productName}
          src={product.image}
          className="h-48 object-contain"
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
              defaultValue={product.rating}
              className="my-2"
            />
            <Text variant={TextVariant.P4} className="text-gray-600 my-1">
              {truncateText(product.description, 30)}
            </Text>
            <Text variant={TextVariant.H4} className="font-bold my-1">
              {product.price}
            </Text>
            <CustomButton
              colorKey="primary"
              htmlType="submit"
              className=" h-[30px] text-[18px] text-white mt-3"
            >
              Buy Now
            </CustomButton>
          </>
        }
      />
    </Card>
  );
};
