import React from "react";
import { colors } from "../../../../theme/color";
import { Container, Text, TextVariant } from "../../../../components/atoms";
import { TProduct } from "../../../../types/productTypes";
import { Col, Flex, Row, Spin } from "antd";
import { ProductCard } from "../../../../components";
import { useGetProductsQuery } from "../../../../redux/features/ProductApi";
import { getProducts } from "../../../../redux/features/ProductSlice";
import { useAppSelector } from "../../../../redux/hooks";

// const featuredProducts: TProduct[] = [
//   {
//     productName: "Endurance Running Shoes",
//     description:
//       "Experience unmatched durability and comfort with our Endurance Running Shoes. Designed for the long haul, these shoes feature advanced cushioning technology that absorbs impact and optimizes rebound, providing you with the support needed to keep pushing your limits. With a breathable mesh upper that keeps your feet cool and dry, and a robust outsole that grips on varied surfaces, you are set for any adventure. The dynamic fit system adapts to the shape of your foot, ensuring a perfect fit with no slippage. Whether you're hitting the trails or the track, these shoes are your ideal companion for achieving new personal bests. Tagged with a high abrasion resistance, they're built to withstand rigorous training routines and long-distance runs. Upgrade your running gear and enjoy a blend of functionality and unmatched comfort.",
//     category: "Running",
//     brand: "Athletix",
//     stockQuantity: 150,
//     rating: 4.5,
//     price: "$120.00",
//     image: "https://i.ibb.co/FbRDRSJ/image.png",
//   },
//   {
//     productName: "Pro Swim Goggles",
//     description:
//       "Dive into excellence with our Pro Swim Goggles. Engineered for competitive swimmers, these goggles offer superior clarity and are designed to reduce drag and promote optimal alignment in the water. The anti-fog treatment ensures you maintain clear vision during your swim, while the wide peripheral range allows you to keep an eye on your rivals. Featuring a dual strap for security and an adjustable nose bridge for comfort, these goggles are both practical and comfortable. The mirrored lens technology not only protects your eyes from harmful UV rays but also minimizes glare, allowing you to focus on your swimming technique. Approved by international swimming federations, they are a must-have for anyone serious about competitive swimming. Get ready to swim like a pro, with visibility and comfort that adjusts seamlessly to your needs.",
//     category: "Water Sports",
//     brand: "AquaFast",
//     stockQuantity: 200,
//     rating: 4.8,
//     price: "$35.00",
//     image: "url-to-swim-goggles-image.jpg",
//   },
//   {
//     productName: "Elite Basketball",
//     description:
//       "The Elite Basketball is crafted for serious players who demand high performance on the court. Made with premium composite leather, this basketball offers excellent grip and control, allowing you to execute precise passes and shots with confidence. Its moisture-wicking cover keeps the ball dry and responsive, while the reinforced bladder ensures maximum air retention for consistent bounce and long-lasting play. Whether you're training or competing, the Elite Basketball is designed to meet the rigorous standards of professional play. Endorsed by top athletes, this basketball will elevate your game with its superior quality and durability. Step up to the challenge and dominate the court with the Elite Basketball.",
//     category: "Team Sports",
//     brand: "ProHoop",
//     stockQuantity: 300,
//     rating: 4.7,
//     price: "$60.00",
//     image: "https://i.ibb.co/sRv1B2J/image.png",
//   },
//   {
//     productName: "Yoga Master Mat",
//     description:
//       "Transform your practice with the Yoga Master Mat. This mat provides a perfect balance of comfort and stability, designed to support you through every pose. With its non-slip surface and optimal thickness, it offers excellent cushioning for your joints and a firm grip to keep you grounded. Made from eco-friendly materials, the Yoga Master Mat is free from harmful chemicals and is biodegradable, making it a great choice for both you and the environment. Its lightweight design makes it easy to carry, whether you're heading to the studio or practicing at home. Enhance your yoga experience with a mat that blends functionality, comfort, and sustainability. The Yoga Master Mat is your ideal partner on the journey to physical and mental well-being.",
//     category: "Yoga",
//     brand: "ZenFlex",
//     stockQuantity: 100,
//     rating: 4.9,
//     price: "$45.00",
//     image: "url-to-yoga-mat-image.jpg",
//   },
//   {
//     productName: "Pro Cyclist Helmet",
//     description:
//       "Stay safe and stylish on your rides with the Pro Cyclist Helmet. This helmet combines cutting-edge safety features with a sleek design, ensuring you look good while staying protected. It features a durable polycarbonate shell and EPS foam liner that absorbs impact, providing top-notch protection in case of a fall. The adjustable fit system allows for a personalized and secure fit, while the ventilation system keeps you cool and comfortable, even on long rides. The lightweight design reduces strain on your neck, making it ideal for extended cycling sessions. Available in various colors and sizes, the Pro Cyclist Helmet is perfect for riders of all levels. Prioritize your safety without compromising on style with this essential piece of cycling gear.",
//     category: "Cycling",
//     brand: "RideSafe",
//     stockQuantity: 120,
//     rating: 4.6,
//     price: "$75.00",
//     image: "url-to-cyclist-helmet-image.jpg",
//   },
//   {
//     productName: "Trail Blazing Hiking Backpack",
//     description:
//       "Embark on your outdoor adventures fully equipped with our Trail Blazing Hiking Backpack. Designed for the modern explorer, this backpack is built from durable, weather-resistant materials, ready to withstand the elements of any terrain. The ergonomic design ensures comfort even when packed to capacity, featuring padded shoulder straps, a ventilated back panel, and multiple compartments for organized storage. Ideal for long hikes and camping trips, this backpack's intuitive pockets and hydration system port make it an essential outdoor companion. Whether you're crossing rivers or scaling mountains, our Trail Blazing Hiking Backpack offers the reliability and functionality to take your explorations to new heights.",
//     category: "Outdoor Adventure",
//     brand: "HighRange",
//     stockQuantity: 85,
//     rating: 4.8,
//     price: "$110.00",
//     image: "url-to-hiking-backpack-image.jpg",
//   },
//   {
//     productName: "Champion Soccer Ball",
//     description:
//       "Unleash your skills with the Champion Soccer Ball, designed for precision and durability on the field. This soccer ball is constructed with a high-quality synthetic leather cover that offers excellent touch and feel, ensuring your passes and shots are on point. The thermal-bonded construction minimizes water absorption, while the reinforced bladder provides enhanced air retention and shape. Whether it's a match day or training session, the Champion Soccer Ball delivers consistent performance, helping you play your best. Approved for competitive play, it's the professional's choice for top-level games. Dominate the pitch and control the game with a ball designed for champions.",
//     category: "Team Sports",
//     brand: "GoalMaster",
//     stockQuantity: 150,
//     rating: 4.5,
//     price: "$40.00",
//     image: "https://i.ibb.co/sRv1B2J/image.png",
//   },
//   {
//     productName: "Ultimate Golf Clubs Set",
//     description:
//       "Perfect your swing with the Ultimate Golf Clubs Set. Each club in this set is crafted for exceptional performance, combining advanced materials and innovative designs to enhance your game from tee to green. The set includes drivers, irons, wedges, and a putter, each engineered to improve distance, accuracy, and feel. The lightweight graphite shafts provide increased swing speed, while the precision-milled clubfaces offer superb control. Suitable for golfers of all skill levels, this comprehensive set helps you achieve consistent play on the course. Elevate your golf experience with tools designed for winners.",
//     category: "Team Sports",
//     brand: "EagleStrike",
//     stockQuantity: 75,
//     rating: 4.7,
//     price: "$950.00",
//     image: "https://i.ibb.co/qd5QbgD/image.png",
//   },
//   {
//     productName: "Dynamic Tennis Shoes",
//     description:
//       "Step onto the court with confidence in our Dynamic Tennis Shoes, designed for agility and speed. These shoes feature a lightweight construction and a responsive cushioning system that provides explosive energy return with every step. The advanced traction pattern ensures excellent grip during quick turns and sprints, while the breathable mesh upper keeps your feet cool under pressure. Tailored for competitive players, these shoes allow you to move freely and focus on your game without distractions. Experience the blend of performance, comfort, and style that sets our Dynamic Tennis Shoes apart from the rest. Dominate the court and play to win.",
//     category: "Racquet Sports",
//     brand: "CourtMaster",
//     stockQuantity: 120,
//     rating: 4.8,
//     price: "$130.00",
//     image: "url-to-tennis-shoes-image.jpg",
//   },
//   {
//     productName: "Advanced Rowing Machine",
//     description:
//       "Enhance your fitness regimen with the Advanced Rowing Machine, designed to offer a full-body workout that mimics the natural motion of rowing on water. This machine features a smooth, silent glide rail and a responsive resistance system that adjusts to match your intensity level. The ergonomic seat and non-slip handle provide comfort during long sessions, while the digital monitor displays your progress, including strokes, time, and calories burned. Compact and easy to store, it's the perfect addition to any home gym, providing an efficient and enjoyable way to improve cardiovascular health and muscle strength. Get fit with a workout that's as effective as it is enjoyable. Our Advanced Rowing Machine brings the challenge and satisfaction of rowing right to your home.",
//     category: "Fitness",
//     brand: "FitRow",
//     stockQuantity: 90,
//     rating: 4.9,
//     price: "$700.00",
//     image: "url-to-rowing-machine-image.jpg",
//   },
//   {
//     productName: "Multi-Purpose Yoga Pants",
//     description:
//       "Discover the ultimate in comfort and versatility with our Multi-Purpose Yoga Pants. These pants are crafted from a high-stretch, breathable fabric that moves with you, making them ideal for yoga, running, or any fitness activity. The moisture-wicking technology keeps you dry and comfortable, while the high-waist design offers added support and coverage. With a variety of colors and patterns available, these pants are not only functional but also stylish, easily transitioning from workout to casual wear. Embrace flexibility and style in every movement with our Multi-Purpose Yoga Pants, your go-to choice for activewear that supports your active lifestyle.",
//     category: "Yoga",
//     brand: "FlexiForm",
//     stockQuantity: 150,
//     rating: 4.6,
//     price: "$60.00",
//     image: "url-to-yoga-pants-image.jpg",
//   },
//   {
//     productName: "Precision Golf Balls",
//     description:
//       "Drive farther and more accurately with our Precision Golf Balls. Engineered for optimal performance, these golf balls feature a high-speed core and aerodynamic dimple pattern that maximizes distance and improves flight stability. The urethane cover delivers a soft feel and exceptional spin control, making them ideal for players looking to enhance their game on the greens. Whether you're a seasoned pro or a weekend golfer, our Precision Golf Balls provide the consistency and performance needed to lower your scores. Experience the difference precision makes, and see how our golf balls can help you achieve your best rounds yet.",
//     category: "Team Sports",
//     brand: "ProStroke",
//     stockQuantity: 200,
//     rating: 4.5,
//     price: "$45.00",
//     image: "url-to-golf-balls-image.jpg",
//   },
//   {
//     productName: "Extreme Mountain Bike",
//     description:
//       "Conquer rugged trails with the Extreme Mountain Bike, designed for the thrill-seeker in you. This bike features a robust frame, powerful disc brakes, and a suspension system that handles bumps and drops with ease. The aggressive tread tires provide excellent traction in mud and gravel, while the lightweight design ensures quick handling and speed. Whether you're an experienced mountain biker or looking to start off-road cycling, our Extreme Mountain Bike offers the durability and performance needed to tackle any challenge. Push your limits and explore new terrains with a bike that's built for adventure. The Extreme Mountain Bike is your partner in pursuit of the outdoors.",
//     category: "Cycling",
//     brand: "TrailBlazer",
//     stockQuantity: 50,
//     rating: 4.7,
//     price: "$1200.00",
//     image: "url-to-mountain-bike-image.jpg",
//   },
//   {
//     productName: "Thermal Hiking Jacket",
//     description:
//       "Stay warm and protected on your outdoor excursions with our Thermal Hiking Jacket. This jacket is crafted from advanced fabric that insulates while allowing breathability, making it ideal for cold-weather hikes and climbs. The water-resistant exterior shields you from rain and snow, while the lightweight design ensures you don't feel weighed down. Featuring multiple pockets for essentials and adjustable cuffs for a snug fit, this jacket is as practical as it is comfortable. Whether you're trekking through the mountains or facing winter weather, our Thermal Hiking Jacket provides the warmth and protection needed to enjoy the outdoors in comfort.",
//     category: "Outdoor Adventure",
//     brand: "AlpinePro",
//     stockQuantity: 100,
//     rating: 4.8,
//     price: "$180.00",
//     image: "url-to-hiking-jacket-image.jpg",
//   },
//   {
//     productName: "Speed Racing Drone",
//     description:
//       "Experience the excitement of flight with our Speed Racing Drone. Designed for high-speed racing and agile maneuvers, this drone features cutting-edge technology and a lightweight frame that offers exceptional performance in the air. Equipped with an HD camera for live streaming video, it provides a first-person view of the action, enhancing your flying experience. The advanced control system is intuitive and responsive, making it suitable for both beginners and experienced pilots. Compete in drone races or explore aerial photography with a machine that's built for speed and precision. Our Speed Racing Drone takes your flying adventures to new heights.",
//     category: "Outdoor Adventure",
//     brand: "SkyHigh",
//     stockQuantity: 80,
//     rating: 4.6,
//     price: "$350.00",
//     image: "url-to-racing-drone-image.jpg",
//   },
//   {
//     productName: "Ergonomic Gaming Chair",
//     description:
//       "Enhance your gaming sessions with our Ergonomic Gaming Chair. Designed with the serious gamer in mind, this chair features superior comfort and support, allowing you to game for hours without discomfort. The adjustable backrest, armrests, and lumbar support ensure a perfect fit, while the high-quality materials provide durability and style. The smooth-rolling casters allow for easy movement around your gaming space, and the recline feature lets you relax between sessions. Whether you're battling enemies or racing to the finish line, our Ergonomic Gaming Chair is your throne for gaming excellence, providing the comfort and support you need to perform at your best.",
//     category: "Gaming",
//     brand: "GameMaster",
//     stockQuantity: 100,
//     rating: 4.9,
//     price: "$250.00",
//     image: "url-to-gaming-chair-image.jpg",
//   },
// ];
const featuredProducts: TProduct[] = [];
export const FeatureProducts = () => {
  const { data, isLoading } = useGetProductsQuery();

  const featuredProducts = useAppSelector(getProducts);

  return (
    <section className="py-40">
      <Container>
        <div>
          <div className="text-center mb-8">
            <Text variant={TextVariant.H1} className="text-center">
              Feature Products
            </Text>
            <Text
              variant={TextVariant.P3}
              className="mt-[8px]"
              style={{ color: colors.darkGray }}
            >
              Discover our latest featured products and explore their unique
              features.
            </Text>
          </div>
          {isLoading ? (
            <div>
              <Flex
                align="center"
                gap="middle"
                justify="center"
                className="h-[200px]"
              >
                <Spin size="large" />
              </Flex>
            </div>
          ) : (
            <Row justify="center" gutter={[16, 16]}>
              {featuredProducts.map((product, index) => (
                <Col key={index} xs={24} sm={12} md={8} lg={6}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </section>
  );
};
