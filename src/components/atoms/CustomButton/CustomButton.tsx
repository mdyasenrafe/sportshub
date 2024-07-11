import React from "react";
import { Button } from "antd";
import { ButtonProps } from "antd/lib/button";
import { ReactNode } from "react";
import { ColorKey, colors } from "../../../theme/color";

interface CustomButtonProps extends ButtonProps {
  colorKey?: ColorKey;
  icon?: ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  colorKey,
  icon,
  ...props
}) => {
  // Apply custom color styles if colorKey is provided
  const style = colorKey
    ? {
        backgroundColor: colors[colorKey],
        borderColor: colors[colorKey],
        fontSize: 16,
      }
    : {};

  return (
    <Button {...props} icon={icon} style={style}>
      {children}
    </Button>
  );
};
