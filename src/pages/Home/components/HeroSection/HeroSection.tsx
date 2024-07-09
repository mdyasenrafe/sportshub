import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Custom components and styles
import { Container, Text, TextVariant } from "../../../../components/atoms";
import CustomButton from "../../../../components/atoms/CustomButton/CustomButton";
import { FaShoppingCart } from "react-icons/fa";
import { colors } from "../../../../theme/color";

export const HeroSection = () => {
  const sportsCarouselData = [
    {
      image: "https://i.ibb.co/18JxH2C/hero-1.png", // Updated image URL for consistency
      title: "Gear Up for the Marathon - 30% Off",
      description: "Save up to 30% on all marathon essentials!",
      link: "/category/marathon-gear",
    },
    {
      image: "https://i.ibb.co/18JxH2C/hero-1.png",
      title: "Find Your Zen - 25% Off",
      description: "Up to 25% off on yoga mats, blocks, and apparel.",
      link: "/category/yoga",
    },
    {
      image: "https://i.ibb.co/18JxH2C/hero-1.png",
      title: "Football Season Kickoff - 40% Off",
      description: "Get ready for the season with up to 40% off football gear!",
      link: "/category/football",
    },
    {
      image: "https://i.ibb.co/18JxH2C/hero-1.png",
      title: "Hit the Trails - 35% Off",
      description: "Enjoy deals on bikes and accessories up to 35% off.",
      link: "/category/cycling",
    },
    {
      image: "https://i.ibb.co/18JxH2C/hero-1.png",
      title: "Boost Your Workout - 50% Off",
      description: "Essential fitness gear at a discount of up to 50%!",
      link: "/category/fitness",
    },
  ];

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
                className="text-4xl md:text-[64px] leading-[2.75rem] sm:leading-[2.75rem] lg:leading-[4.75rem]"
              >
                {item.title}
              </Text>
              <Text variant={TextVariant.P1}>{item.description}</Text>
              <CustomButton
                colorKey="primary"
                onClick={() => console.log("Clicked!")}
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
