import React from "react";
import {
  Container,
  CustomButton,
  Text,
  TextVariant,
} from "../../../../components/atoms";
import { Col, Row } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FormInput, FormWrapper } from "../../../../components/form";
import { FormTextArea } from "../../../../components/form/FormTextArea";
import ContactImage from "../../../../assets/images/contact.gif";
import { colors } from "../../../../theme/color";

export const Contact = () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {};
  return (
    <section className="py-24">
      <Container>
        <Row>
          <Col md={12}>
            <img src={ContactImage} className=" h-full" />
          </Col>
          <Col md={12}>
            <div className="mb-4">
              <Text variant={TextVariant.H1}>Get in Touch</Text>
              <Text
                variant={TextVariant.P3}
                className="mt-[8px]"
                style={{ color: colors.darkGray }}
              >
                Have a question or suggestion? Drop us a line – we're here to
                help!
              </Text>
            </div>

            <FormWrapper onSubmit={onSubmit}>
              <FormInput label="Name" type="text" name="name" />
              <FormInput label="Email" type="email" name="email" />
              <FormInput label="Subject" type="text" name="subject" />
              <FormTextArea label="Body" name="body" />
              <CustomButton
                colorKey="primary"
                htmlType="submit"
                className="w-full h-[48px] text-[18px] text-white"
              >
                Submit
              </CustomButton>
            </FormWrapper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
