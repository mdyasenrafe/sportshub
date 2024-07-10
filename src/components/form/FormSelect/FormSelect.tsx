import { Form, Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextVariant } from "../../atoms";

type TFormSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disabled?: boolean }[];
};

export const FormSelect: React.FC<TFormSelectProps> = ({
  name,
  label,
  options,
}) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => {
        return (
          <Form.Item label={label}>
            <Select
              style={{ width: "100%", borderColor: "red" }}
              {...field}
              options={options}
              size="large"
              allowClear
              className={`font-poppins text-[14px] ${
                error && "border-red-500"
              }`}
            />
            {error && (
              <Text variant={TextVariant.P6} style={{ color: "red" }}>
                {error.message}
              </Text>
            )}
          </Form.Item>
        );
      }}
    />
  );
};
