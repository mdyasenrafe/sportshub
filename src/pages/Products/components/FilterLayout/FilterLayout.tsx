import React, { useState } from "react";
import { Text } from "../../../../components/atoms";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Input, Radio, Space } from "antd";
import { CATEGORIES_DATA_ARRAY } from "../../../../constant/CategoriesData";
import { FilterLayoutProps, Filters } from "../types";

export const FilterLayout: React.FC<FilterLayoutProps> = ({
  item,
  handleFilterChange,
}) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer my-4>"
        onClick={() => setShow(!show)}
      >
        <Text
          className="mb-3"
          style={{
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {item.label}
        </Text>
        {show ? (
          <BiChevronUp size={25} className="text-primary cursor-pointer" />
        ) : (
          <BiChevronDown size={25} className="text-primary cursor-pointer" />
        )}
      </div>
      {show && item.options && (
        <Radio.Group
          onChange={(e) =>
            handleFilterChange(item.key as keyof Filters, e.target.value)
          }
          value={item.value}
        >
          <Space direction="vertical">
            {item?.options.map((item) => (
              <Radio value={item.value}>{item.label}</Radio>
            ))}
          </Space>
        </Radio.Group>
      )}

      {item.key === "price" && (
        <div className="flex justify-between">
          <div className="w-[48%]">
            <Input
              placeholder="Min"
              type="number"
              onChange={(e) => handleFilterChange("priceGte", e.target.value)}
              value={item.value?.min || ""}
            />
          </div>
          <div className="w-[48%]">
            <Input
              placeholder="Max"
              type="number"
              onChange={(e) => handleFilterChange("priceLte", e.target.value)}
              value={item.value?.max || ""}
            />
          </div>
        </div>
      )}

      <hr className="my-2" />
    </div>
  );
};
