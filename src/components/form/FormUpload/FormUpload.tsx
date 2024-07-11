import React, { useEffect, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { CustomButton, Text, TextVariant } from "../../atoms";
import { Form, Image, Upload } from "antd";
import { UploadProps } from "antd/lib/upload";
import { FaUpload } from "react-icons/fa";

interface TFormUploadProps {
  name: string; // Use this to differentiate between thumb and cover pictures
  label?: string;
  multiple?: boolean;
  uploadProps?: UploadProps;
  defaultValue?: string | string[];
}

export const FormUpload: React.FC<TFormUploadProps> = React.forwardRef(
  (
    { name, label = "Upload", multiple = false, uploadProps, defaultValue },
    ref
  ) => {
    const { control, setValue } = useFormContext();

    useEffect(() => {
      if (defaultValue?.length !== 0 && defaultValue !== "") {
        if (
          name === "thumb" &&
          defaultValue !== "" &&
          defaultValue?.length !== 0 &&
          defaultValue
        ) {
          setValue(name, defaultValue[0], { shouldValidate: true });
        } else {
          setValue(name, defaultValue, { shouldValidate: true });
        }
      }
    }, [defaultValue]);

    const generateDefaultFileList = (urls: string | string[]) => {
      if (!urls || urls == "") return [];

      const fileList = Array.isArray(urls) ? urls : [urls];
      return fileList.map((url, index) => ({
        uid: index.toString(),
        name: url?.split("/").pop() || "image",
        status: "done" as const,
        url,
      }));
    };

    const handleFileChange = async (info: any) => {
      const files = await Promise.all(
        info.fileList.map(async (file: any) => {
          if (file.originFileObj) {
            const base64 = await getBase64(file.originFileObj); // Convert to base64 for form storage
            file.base64 = base64; // Store base64 in the file object for form submission
            file.preview = URL.createObjectURL(file.originFileObj); // Create object URL for preview
          }
          return file.base64;
        })
      );
      setValue(name, multiple ? files : files[0], { shouldValidate: true });
    };
    // Convert file to Base64
    const getBase64 = (file: Blob) =>
      new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const result = reader.result as string;
          const base64Data = result.split(",")[1]; // Split the result and get the Base64 data
          resolve(base64Data); // Return only the Base64 data, excluding the prefix
        };
        reader.onerror = (error) => reject(error);
      });

    const isThumb = name === "thumb"; // Determine if this instance is for 'thumb'

    const handlePreview = async (file: any) => {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj as any);
      }
      window.open(file.url || file.preview, "_blank");
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
                ref={ref}
                beforeUpload={() => false}
                onChange={handleFileChange}
                multiple={multiple}
                listType={isThumb ? "picture" : "picture-card"}
                maxCount={multiple ? undefined : 1}
                accept=".jpeg,.jpg,.png"
                onPreview={handlePreview}
                defaultFileList={generateDefaultFileList(
                  defaultValue as string | string[]
                )}
              >
                {!isThumb ? (
                  <button
                    className="flex justify-center items-center"
                    type="button"
                  >
                    <FaUpload />
                    <Text variant={TextVariant.P6} className="ml-2">
                      Upload
                    </Text>
                  </button>
                ) : (
                  <CustomButton iconPosition="start" icon={<FaUpload />}>
                    Upload
                  </CustomButton>
                )}
              </Upload>
            </Form.Item>
          )}
        />
      </div>
    );
  }
);
