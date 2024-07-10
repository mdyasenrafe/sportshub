import React, { useState } from "react";
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
}

export const FormUpload: React.FC<TFormUploadProps> = ({
  name,
  label = "Upload",
  multiple = false,
  uploadProps,
}) => {
  const { control, setValue } = useFormContext();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleFileChange = (info: any) => {
    const files = info.fileList.map((file: any) => {
      if (file.originFileObj) {
        return URL.createObjectURL(file.originFileObj); // Creating a blob URL for preview
      }
      return file.url || file.thumbUrl;
    });

    setValue(name, multiple ? files : files[0], { shouldValidate: true });
  };

  //     const handleFileChange = (info: any) => {
  //     const files = info.fileList.map((file: any) => {
  //       if (file.originFileObj && !file.url && !file.preview) {
  //         // Create object URL only if there's no existing URL or preview
  //         file.preview = URL.createObjectURL(file.originFileObj);
  //       }
  //       return file;
  //     });

  //     setValue(name, multiple ? files : files[0], { shouldValidate: true });
  //   };

  const isThumb = name === "thumb"; // Determine if this instance is for 'thumb'

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      // Assuming file.originFileObj exists
      file.preview = URL.createObjectURL(file.originFileObj);
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
              beforeUpload={() => false}
              onChange={handleFileChange}
              multiple={multiple}
              listType={isThumb ? "picture" : "picture-card"}
              maxCount={multiple ? undefined : 1}
              accept=".png, .jpg, .svg"
              onPreview={handlePreview}
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
};

// import React, { useState } from "react";
// import { useFormContext, Controller } from "react-hook-form";
// import { CustomButton, Text, TextVariant } from "../../atoms";
// import { Form, Upload, Modal } from "antd";
// import { UploadProps } from "antd/lib/upload";

// interface TFormUploadProps {
//   name: string;
//   label?: string;
//   multiple?: boolean;
//   uploadProps?: UploadProps;
// }

// export const FormUpload: React.FC<TFormUploadProps> = ({
//   name,
//   label = "Upload",
//   multiple = false,
//   uploadProps,
// }) => {
//   const { control, setValue } = useFormContext();

//   return (
//     <div className="mb-5">
//       <Controller
//         name={name}
//         control={control}
//         render={({ field, fieldState: { error } }) => (
//           <Form.Item
//             label={label}
//             help={
//               error && (
//                 <Text variant={TextVariant.P6} style={{ color: "red" }}>
//                   {error.message}
//                 </Text>
//               )
//             }
//           >
//             <Upload
//               {...field}
//               {...uploadProps}
//               listType={multiple ? "picture-card" : "picture"}
//               onPreview={handlePreview}
//               onChange={handleFileChange}
//               beforeUpload={() => false}
//               multiple={multiple}
//             >
//               {field.value?.length >= (multiple ? 5 : 1) ? null : (
//                 <CustomButton>Click to upload</CustomButton>
//               )}
//             </Upload>
//             <Modal
//               visible={previewVisible}
//               footer={null}
//               onCancel={() => setPreviewVisible(false)}
//             >
//               <img alt="example" style={{ width: "100%" }} src={previewImage} />
//             </Modal>
//           </Form.Item>
//         )}
//       />
//     </div>
//   );
// };
