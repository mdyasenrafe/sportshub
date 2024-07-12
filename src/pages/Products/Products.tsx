import React, { useEffect, useState } from "react";
import { Input, Select, Button, Row, Col, Pagination } from "antd";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import { Container } from "../../components/atoms";
import { LeftSideBar, RightSideBar } from "./components";
import { TProduct } from "../../types/productTypes";
import { Filters } from "./components/types";

export const Products: React.FC = () => {
  const [pageSize, setPageSize] = useState(10);
  const [tempFilters, setTempFilters] = useState<Filters>({
    searchTerm: undefined,
    category: undefined,
    brand: undefined,
    priceGte: undefined,
    priceLte: undefined,
    rating: undefined,
    sort: undefined,
  });
  const [filters, setFilters] = useState<Filters>(tempFilters);
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: products, isLoading } = useGetProductsQuery({
    ...filters,
    page: currentPage,
    limit: pageSize,
  });

  const handleSearch = (value: string) => {
    setFilters({ ...filters, searchTerm: value });
  };

  const resetFilters = () => {
    setTempFilters({
      searchTerm: "",
      category: "",
      brand: "",
      priceGte: undefined,
      priceLte: undefined,
      rating: undefined,
    });
    setFilters({
      searchTerm: "",
      category: "",
      brand: "",
      priceGte: undefined,
      priceLte: undefined,
      rating: undefined,
    });
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
    // refetch();
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
              currentPage={currentPage}
              pageSize={pageSize}
              total={products?.meta.total as number}
              setCurrentPage={setCurrentPage}
              setPageSize={setPageSize}
            />
          </div>
        </section>
      </Container>
    </MainLayout>
  );
};
