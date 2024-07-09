import React from "react";
import { Text, TextVariant } from "../../../../../../components/atoms";
import { colors } from "../../../../../../theme/color";

type TCategory = {
  icon: JSX.Element;
  name: string;
  link: string;
  description: string;
};

interface CategoryCardProps {
  data: TCategory;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  data,
  onClick,
}) => (
  <div
    className="p-5 bg-white rounded-[16px] border border-[#e2e8f0] hover:border-[#9EB567] cursor-pointer text-center px-10"
    onClick={onClick}
  >
    <div className="flex flex-col items-center">
      <div className="p-3 rounded-full border border-[#9EB567]">
        {data.icon}
      </div>
      <div className="mt-2">
        <Text variant={TextVariant.H4}>{data.name}</Text>
        <Text
          variant={TextVariant.P6}
          style={{ color: colors.darkGray }}
          className="mt-1"
        >
          {data.description}
        </Text>
      </div>
    </div>
  </div>
);
