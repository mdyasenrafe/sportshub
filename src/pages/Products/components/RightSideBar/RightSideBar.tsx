import { Col, Flex, Input, Row, Spin } from "antd";
import React from "react";
import { AiOutlineBars } from "react-icons/ai";
import { TProduct } from "../../../../types/productTypes";
import { ProductCard } from "../../../../components";

const { Search } = Input;

type RightSideBarProps = {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  products: TProduct[];
  isLoading: boolean;
};

export const RightSideBar: React.FC<RightSideBarProps> = ({
  setShowSideBar,
  products,
  isLoading,
}) => {
  return (
    <div className="col-span-3 border border-[#e2e8f0] rounded-[8px] p-4">
      <div className="flex items-center">
        <div className="w-[90%] md:w-full">
          <Search
            placeholder="Search products"
            // onSearch={handleSearch}
            enterButton
          />
        </div>
        <div className="border-lightgray rounded-full w-[34px] h-[34px] flex justify-center items-center ml-2 md:hidden">
          <AiOutlineBars
            className="mx-auto cursor-pointer text-xl"
            color="#3c7fff"
            onClick={() => setShowSideBar(true)}
          />
        </div>
      </div>
      {isLoading ? (
        <div>
          <Flex
            align="center"
            gap="middle"
            justify="center"
            className="h-[200px]"
          >
            <Spin size="large" />
          </Flex>
        </div>
      ) : (
        <Row gutter={[16, 16]} className="mt-12">
          {products.map((product, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
