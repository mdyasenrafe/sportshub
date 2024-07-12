import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import parse from "html-react-parser";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom components and styles
import {
  Container,
  CustomButton,
  Text,
  TextVariant,
} from "../../../../components/atoms";
import { FaShoppingCart } from "react-icons/fa";
import { colors } from "../../../../theme/color";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const sportsCarouselData = [
    {
      image: "https://i.ibb.co/18JxH2C/hero-1.png",
      title: `Gear Up for the<br />Marathon`,
      description: "Save up to 30% on all marathon essentials!",
      link: "/category/marathon-gear",
    },
    {
      image: "https://i.ibb.co/fYQwm8D/Cream-Beige-Food-Banner-Landscape-2.png",
      title: `Find Your Zen with<br />Our Yoga Collection`,
      description: "Up to 25% off on yoga mats, blocks, and apparel.",
      link: "/category/yoga",
    },
    {
      image: "https://i.ibb.co/gDhHY25/Cream-Beige-Food-Banner-Landscape-1.png",
      title: `Football Season<br />Kickoff Sale`,
      description: "Get ready for the season with up to 40% off football gear!",
      link: "/category/football",
    },
    {
      image: "https://i.ibb.co/VSjBWfJ/Cream-Beige-Food-Banner-Landscape-3.png",
      title: `Hit the Trails with<br />Our Cycling Gear`,
      description: "Enjoy deals on bikes and accessories up to 35% off.",
      link: "/category/cycling",
    },
  ];

  const navigate = useNavigate();

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sportsCarouselData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center text-white py-24 hero-section"
            style={{
              backgroundImage: `url(${item.image})`,
              height: "100vh",
            }}
          >
            <Container>
              <Text
                variant={TextVariant.H1}
                style={{
                  color: colors.secondary,
                }}
                className="text-4xl md:text-[48px] lg:text-[64px] leading-[2.75rem] sm:leading-[2.75rem] md:leading-[3.50rem] lg:leading-[4.75rem]"
              >
                {parse(item.title)}
              </Text>
              <Text variant={TextVariant.P1}>{item.description}</Text>
              <CustomButton
                colorKey="primary"
                onClick={() => navigate("/products")}
                icon={<FaShoppingCart />}
                className="text-white h-[40px] w-[232px] mt-4"
                iconPosition="end"
              >
                Buy Now
              </CustomButton>
            </Container>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
