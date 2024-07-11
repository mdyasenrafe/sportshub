import React from "react";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import { Container, Text, TextVariant } from "../../components/atoms";
import { Col, Row } from "antd";
import { Contact } from "../Home/components";
import { FaUser } from "react-icons/fa";

export const About = () => {
  const teamMembers = [
    { name: "John Doe", position: "CEO", icon: <FaUser size={50} /> },
    { name: "Jane Smith", position: "CTO", icon: <FaUser size={50} /> },
    { name: "Alice Johnson", position: "CFO", icon: <FaUser size={50} /> },
    { name: "Bob Brown", position: "CMO", icon: <FaUser size={50} /> },
  ];
  return (
    <MainLayout>
      <Container>
        <section className="pb-10">
          <Row align={"middle"}>
            <Col xs={24} lg={12}>
              <img src="https://i.ibb.co/B3j4G0Q/About-us-page-bro.png" />
            </Col>
            <Col xs={24} lg={12}>
              <Text variant={TextVariant.H1} className="mb-6">
                About Us
              </Text>
              <Text variant={TextVariant.P2} className="mb-4">
                Welcome to SportsHub, your ultimate destination for sporting
                goods. Since our founding, we've been dedicated to providing
                athletes and outdoor enthusiasts with the best equipment and
                accessories for a wide variety of sports. Our e-commerce
                platform is designed to serve both our customers and our team
                efficiently, with one user role that handles everything from
                browsing and purchasing to administration and customer support.
                At SportsHub, we believe in quality, affordability, and
                accessibility. Whether you’re a professional athlete, a weekend
                warrior, or someone just getting started, we have something for
                everyone. Our extensive range includes everything from soccer
                balls and basketballs to camping gear and water sports
                equipment. Our commitment goes beyond just selling products. We
                strive to promote a healthy lifestyle and encourage sports
                participation at all levels. By providing reliable and
                high-quality products, we aim to help you achieve your best
                performance and enjoy every moment of your active life.
              </Text>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={12}>
              <img src="https://i.ibb.co/PQMz9WR/Business-mission-pana.png" />
            </Col>
            <Col xs={24} lg={12}>
              <Text variant={TextVariant.H3} className="mt-8 mb-4">
                Our Mission & Vision
              </Text>
              <Text variant={TextVariant.P2} className="mb-4">
                Our mission at SportsHub is simple: to equip sports enthusiasts
                with the right gear to excel and enjoy their favorite
                activities. We are dedicated to making high-quality sports
                equipment accessible to everyone, ensuring our customers can
                find what they need when they need it. We aim to support your
                sports journey by offering products that enhance your
                performance and increase your safety. Customer satisfaction is
                at the heart of what we do, and we are committed to listening to
                our users and continuously improving our services. At SportsHub,
                your active life is our priority.
              </Text>
              <Text variant={TextVariant.P2} className="mb-4">
                Our vision at SportsHub is to become a leader in the sporting
                goods industry by being the most trusted provider of sports
                equipment and accessories. We envision a world where everyone
                has the opportunity to engage in sports and enjoy the immense
                benefits of physical activity. Looking ahead, we plan to expand
                our offerings and introduce innovative solutions that meet the
                evolving needs of modern athletes and sports enthusiasts. By
                fostering a community around sports and wellness, we hope to
                inspire more people to lead active and fulfilling lives.
                SportsHub aims to not just sell sports equipment but to be a
                part of your sports journey every step of the way.
              </Text>
            </Col>
          </Row>
          <Contact />
          <div className="mt-10">
            <Text variant={TextVariant.H2} className="text-center mb-4">
              Meet Our Team
            </Text>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-6 my-12 px-10 w-full ">
              {teamMembers?.map((data, index) => (
                <div
                  className="md:flex items-center justify-center mx-auto bg-gray-200 border-x border-[#E1E1E1] p-8 rounded-[32px] shadow h-full mt-4 w-full"
                  key={index}
                >
                  <div>{data.icon}</div>
                  <div className="mt-4 sm:mt-4 md:mt-0">
                    <p className="text-[#161616] ml-4 text-[20px] font-bold">
                      {data?.name}
                    </p>
                    <p className="text-[#161616] ml-4 text-[14px]">
                      {data?.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Container>
    </MainLayout>
  );
};
