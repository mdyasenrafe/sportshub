import { Form, Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";
import { Text, TextVariant } from "../../atoms";

type TFormTextAreaProps = {
  name: string;
  label?: string;
};

export const FormTextArea: React.FC<TFormTextAreaProps> = ({ name, label }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <Form.Item label={label}>
            <Input.TextArea
              {...field}
              id={name}
              size="large"
              maxLength={500}
              autoSize={{ minRows: 7, maxRows: 7 }}
              className="font-poppins text-[14px]"
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
