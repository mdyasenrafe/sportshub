import { Form, Input } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

type TFormTextAreaProps = {
  name: string;
  label?: string;
};

export const FormTextArea: React.FC<TFormTextAreaProps> = ({ name, label }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input.TextArea
              {...field}
              id={name}
              size="large"
              maxLength={500}
              autoSize={{ minRows: 7, maxRows: 7 }}
              className="font-poppins text-[14px]"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};
