import {
  FaRunning,
  FaBasketballBall,
  FaYinYang,
  FaBicycle,
  FaDumbbell,
  FaSwimmer,
  FaCampground,
  FaTableTennis,
} from "react-icons/fa";
import { TCategory } from "../pages/Home/components/Category/components/CategoryCard/types";

export const CategoriesData: TCategory[] = [
  {
    name: "Running",
    icon: <FaRunning />,
    description:
      "Everything you need for your next run, from shoes to performance trackers.",
    link: "running",
  },
  {
    name: "Team Sports",
    icon: <FaBasketballBall />,
    description: "Gear for soccer, basketball, baseball, and more.",
    link: "team-sports",
  },
  {
    name: "Yoga",
    icon: <FaYinYang />,
    description:
      "Quality mats, apparel, and accessories for your yoga practice.",
    link: "yoga",
  },
  {
    name: "Cycling",
    icon: <FaBicycle />,
    description:
      "Bikes and cycling gear for casual riders and competitive cyclists alike.",
    link: "cycling",
  },
  {
    name: "Fitness",
    icon: <FaDumbbell />,
    description:
      "Equip your home gym with our range of weights, machines, and more.",
    link: "fitness",
  },
  {
    name: "Water Sports",
    icon: <FaSwimmer />,
    description: "Swimwear, goggles, and more for your aquatic adventures.",
    link: "water-sports",
  },
  {
    name: "Outdoor Adventure",
    icon: <FaCampground />,
    description: "Camping and hiking gear to help you explore the outdoors.",
    link: "outdoor-adventure",
  },
  {
    name: "Racquet Sports",
    icon: <FaTableTennis />,
    description: "Everything for tennis, badminton, and squash players.",
    link: "racquet-sports",
  },
];

export const CATEGORIES_DATA_ARRAY = [
  "Running",
  "Water Sports",
  "Team Sports",
  "Yoga",
  "Cycling",
  "Outdoor Adventure",
  "Team Sports",
  "Team Sports",
  "Racquet Sports",
  "Fitness",
  "Yoga",
  "Team Sports",
  "Cycling",
  "Outdoor Adventure",
  "Outdoor Adventure",
  "Gaming",
];
