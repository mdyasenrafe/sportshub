// Text.tsx
import React, { CSSProperties, HTMLAttributes } from "react";
import { textVariants, TextVariant } from "./TextStyles";
import { Typography } from "antd";

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: TextVariant;
  className?: string;
  style?: CSSProperties;
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
