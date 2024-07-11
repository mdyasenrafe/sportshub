import React from "react";
import { MainLayout } from "../../components/atoms/layout/MainLayout";
import { Container, Text, TextVariant } from "../../components/atoms";
import { Col, Row } from "antd";

export const About = () => {
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
          <Text variant={TextVariant.H2} className="mt-8 mb-4">
            Our Mission
          </Text>
          <Text variant={TextVariant.P2} className="mb-4">
            Our mission at SportsHub is simple: to equip sports enthusiasts...
          </Text>
          <Text variant={TextVariant.H2} className="mt-8 mb-4">
            Our Vision
          </Text>
          <Text variant={TextVariant.P2} className="mb-4">
            Our vision at SportsHub is to become a leader in the sporting goods
            industry...
          </Text>
        </section>
      </Container>
    </MainLayout>
  );
};
