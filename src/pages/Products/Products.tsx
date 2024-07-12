import React, { useEffect, useState } from "react";
import { Input, Select, Button, Row, Col } from "antd";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import { Container } from "../../components/atoms";
import { LeftSideBar, RightSideBar } from "./components";
import { TProduct } from "../../types/productTypes";
import { Filters } from "./components/types";

export const Products: React.FC = () => {
  const [tempFilters, setTempFilters] = useState<Filters>({
    searchTerm: "",
    category: "",
    brand: "",
    priceGte: undefined,
    priceLte: undefined,
    rating: undefined,
    sort: undefined,
  });

  const [filters, setFilters] = useState<Filters>({
    searchTerm: "",
    category: "",
    brand: "",
    priceGte: undefined,
    priceLte: undefined,
    rating: undefined,
    sort: undefined,
  });

  const [sort, setSort] = useState<string>("");
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const { data: products, isLoading, refetch } = useGetProductsQuery(filters);

  const handleSearch = (value: string) => {
    setFilters({ ...filters, searchTerm: value });
  };

  const resetFilters = () => {
    const resetState = {
      searchTerm: "",
      category: "",
      brand: "",
      priceGte: undefined,
      priceLte: undefined,
      rating: undefined,
    };
    setTempFilters(resetState);
    setFilters(resetState);
  };

  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSideBar]);

  const handleApply = () => {
    setFilters(tempFilters);
    refetch();
  };

  const handleSortChange = (value: string) => {
    setFilters({ ...filters, sort: value });
  };
  return (
    <MainLayout>
      <Container>
        <section className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <LeftSideBar
              showSideBar={showSideBar}
              setShowSideBar={setShowSideBar}
              resetFilters={resetFilters}
              handleApply={handleApply}
              filters={filters}
              tempFilters={tempFilters}
              setTempFilters={setTempFilters}
            />
            <RightSideBar
              setShowSideBar={setShowSideBar}
              products={products?.data as TProduct[]}
              isLoading={isLoading}
              handleSearch={handleSearch}
              handleSortChange={handleSortChange}
            />
          </div>
        </section>
      </Container>
    </MainLayout>
  );
};
