import { Radio, RadioChangeEvent, Space } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CATEGORIES_DATA_ARRAY } from "../../../../constant/CategoriesData";
import { Text, TextVariant } from "../../../../components/atoms";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FilterLayout } from "../FilterLayout";
import { Filters, LeftSideBarProps, TFilterType } from "../types";
import { BRAND_DATA } from "../../../../constant/BrandData";
import { RATING_DATA } from "../../../../constant/RatingData";

export const LeftSideBar: React.FC<LeftSideBarProps> = ({
  showSideBar,
  setShowSideBar,
  resetFilters,
  filters,
  setTempFilters,
  tempFilters,
  handleApply,
}) => {
  const filterTypes: TFilterType[] = [
    {
      key: "category",
      label: "Category",
      options: CATEGORIES_DATA_ARRAY,
      value: tempFilters.category,
    },
    {
      key: "brand",
      label: "Brand",
      options: BRAND_DATA,
      value: tempFilters.brand,
    },
    {
      key: "price",
      label: "Price",
      type: "input",
      value: { min: tempFilters.priceGte, max: tempFilters.priceLte },
    },
    {
      key: "rating",
      label: "Rating",
      options: RATING_DATA,
      value: tempFilters.rating,
    },
  ];

  const handleFilterChange = (name: keyof Filters, value: any) => {
    setTempFilters({ ...tempFilters, [name]: value });
  };

  return (
    <div
      className={`${
        showSideBar
          ? "inline col-span-1 fixed top-0 left-0 z-30 w-full h-screen overflow-y-auto transition-transform bg-white"
          : "hidden"
      } md:inline `}
    >
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Filter by </h1>
        <AiOutlineClose
          onClick={() => setShowSideBar(false)}
          className="text-2xl cursor-pointer md:hidden"
        />
      </div>
      <div className="mx-4 md:mx-0">
        {filterTypes.map((item) => (
          <FilterLayout item={item} handleFilterChange={handleFilterChange} />
        ))}
      </div>
      <div
        className={`${
          showSideBar &&
          "fixed bottom-0 border-t border-t-[#e1e1e1] bg-white shadow-md z-36 w-full h-[80px] items-center"
        } flex justify-around mt-8`}
      >
        <button
          onClick={resetFilters}
          className="hover:shadow-md w-[135px] rounded-[8px] h-[48px] duration-500"
        >
          Reset
        </button>
        <button
          className="bg-primary hover:bg-indigo-800 rounded-[8px] text-white py-[4px] w-[135px] h-[48px] duration-500"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
