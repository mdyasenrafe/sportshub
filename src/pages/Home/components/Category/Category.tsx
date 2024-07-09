import React from "react";
import { Container, Text, TextVariant } from "../../../../components/atoms";
import { colors } from "../../../../theme/color";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import { CategoriesData } from "../../../../constant/CategoriesData";
import { CategoryCard } from "./components/CategoryCard";

export const Category = () => {
  const navigate = useNavigate();

  const handleQuery = (query: string) => {
    navigate(`/products?category=${query}`);
  };

  return (
    <section
      className="py-40 relative"
      style={{
        background: colors.PopularCategory,
      }}
    >
      <Container>
        <div>
          <div className="text-center">
            <Text variant={TextVariant.H1} className="text-center">
              Popular Categories
            </Text>
            <Text
              variant={TextVariant.P3}
              className="mt-[8px]"
              style={{ color: colors.darkGray }}
            >
              Most popular categories of equipments, sorted by popularity
            </Text>
          </div>
        </div>
        <div className="mt-[48px] mb-[48px] lg:hidden">
          <Swiper
            slidesPerView={2}
            spaceBetween={6}
            breakpoints={{
              540: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            className="mySwiper"
          >
            {CategoriesData.map((data, index) => (
              <SwiperSlide key={index}>
                <CategoryCard
                  data={data}
                  onClick={() => handleQuery(data.link)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden lg:grid grid-cols-4 gap-6 mt-[44px]">
          {CategoriesData.map((data) => (
            <CategoryCard
              key={data.name}
              data={data}
              onClick={() => handleQuery(data.link)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
