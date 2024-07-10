import { Form, Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextVariant } from "../../atoms";

type TFormInputProps = {
  type: string;
  name: string;
  label?: string;
};

export const FormInput: React.FC<TFormInputProps> = ({ type, name, label }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label={label}
            style={{
              fontFamily: "Poppins",
            }}
            className="font-poppins"
          >
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              className={`font-poppins text-[14px] ${
                error && "border-red-500"
              }`}
            />
            {error && (
              <Text
                variant={TextVariant.P5}
                style={{ color: "red" }}
                className="mt-2"
              >
                {error.message}
              </Text>
            )}
          </Form.Item>
        )}
      />
    </div>
  );
};
