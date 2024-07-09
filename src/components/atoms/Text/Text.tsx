// Text.tsx
import React from "react";
import { textVariants, TextVariant } from "./TextStyles";
import { Typography } from "antd";

interface TextProps {
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = TextVariant.Body,
  children,
  className = "",
  ...props
}) => {
  const textStyle = `${textVariants[variant]} ${className} block`;
  return (
    <Typography.Text className={textStyle} {...props}>
      {children}
    </Typography.Text>
  );
};
