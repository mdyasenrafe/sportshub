import { Form } from "antd";
import React from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};
type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: React.ReactNode;
  resolver?: any;
  defaultValues?: Record<string, any>;
};

export const FormWrapper: React.FC<TFormProps> = ({
  onSubmit,
  children,
  defaultValues,
  resolver,
}) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  const methods = useForm(formConfig);

  const submit: SubmitHandler<FieldValues> = (data) => {
    // console.log("data >", data);
    onSubmit(data);
    // methods.reset();
  };

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
        {children}
      </Form>
    </FormProvider>
  );
};
