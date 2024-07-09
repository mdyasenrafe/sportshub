import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { colors } from "../../../../theme/color";
import CustomButton from "../../../../components/atoms/CustomButton/CustomButton";
import { FaPowerOff } from "react-icons/fa";
import { Typography } from "antd";
import { Text, TextVariant } from "../../../../components/atoms";

export const HeroSection = () => {
  const sportsCarouselData = [
    {
      image: "url-to-image-marathon.jpg",
      altText: "Marathon Gear Sale",
      title: "Gear Up for the Marathon",
      description: "Save up to 30% on all marathon essentials!",
      link: "/category/marathon-gear",
    },
    {
      image: "url-to-image-yoga.jpg",
      altText: "Yoga Essentials Discount",
      title: "Find Your Zen",
      description: "Up to 25% off on yoga mats, blocks, and apparel.",
      link: "/category/yoga",
    },
    {
      image: "url-to-image-football.jpg",
      altText: "Football Season Special",
      title: "Football Season Kickoff",
      description: "Get ready for the season with up to 40% off football gear!",
      link: "/category/football",
    },
    {
      image: "url-to-image-cycling.jpg",
      altText: "Cycling Adventures",
      title: "Hit the Trails",
      description: "Enjoy deals on bikes and accessories up to 35% off.",
      link: "/category/cycling",
    },
    {
      image: "url-to-image-fitness.jpg",
      altText: "Fitness Gear Sale",
      title: "Boost Your Workout",
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
      >
        {sportsCarouselData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col justify-center items-center text-white py-24"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,.678) 100%,rgba(0,0,0,.582) 0),url(https://i.ibb.co/18JxH2C/hero-1.png)`,

              height: "700px",
              backgroundSize: "cover",
              backgroundPosition: "70%",
              backgroundRepeat: "no-repeat",
              display: "flex",
            }}
          >
            <div className="text-center px-4 md:px-8 lg:px-24">
              <Text
                variant={TextVariant.H1}
                style={{
                  color: colors.danger,
                }}
              >
                {item.title}
              </Text>
              <p>{item.description}</p>
              <CustomButton
                colorKey="primary"
                onClick={() => console.log("Clicked!")}
                icon={<FaPowerOff />}
              >
                Primary Button
              </CustomButton>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
