import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { CustomButton, Text, TextVariant } from "../../atoms"; // Make sure the path is correct
import { Form, Upload } from "antd";
import { UploadProps } from "antd/lib/upload";

interface TFormUploadProps {
  name: string;
  label?: string;
  multiple?: boolean;
  uploadProps?: UploadProps;
}

export const FormUpload: React.FC<TFormUploadProps> = ({
  name,
  label = "Upload",
  multiple = false,
  uploadProps,
}) => {
  const { control, setValue } = useFormContext();

  const handleFileChange = (info: any) => {
    const files = info.fileList.map((file: any) => file.originFileObj || file);
    setValue(name, multiple ? files : files[0], { shouldValidate: true });
  };

  return (
    <div className="mb-5">
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Form.Item
            label={label}
            help={
              error && (
                <Text variant={TextVariant.P6} style={{ color: "red" }}>
                  {error.message}
                </Text>
              )
            }
          >
            <Upload
              {...field}
              {...uploadProps}
              beforeUpload={() => false} // Prevent automatic upload
              onChange={handleFileChange}
              multiple={multiple}
              listType="picture"
              maxCount={multiple ? undefined : 1} // Limit files if not multiple
            >
              <CustomButton>Click to upload</CustomButton>
            </Upload>
          </Form.Item>
        )}
      />
    </div>
  );
};
