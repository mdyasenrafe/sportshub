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
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../../../Schema/Schema";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  body: string;
};

export const Contact = () => {
  const onSubmit: SubmitHandler<any> = async (data: ContactFormData) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.body,
      };
      await emailjs.send(
        "service_ebr0xyp",
        "template_6huktzp",
        templateParams,
        "user_FFOGulXlY1DTTgXihYTZS"
      );
      toast.success(
        "Thank you for reaching out! Your message has been sent successfully."
      );
    } catch (error) {
      toast.error(
        "Sorry, there was an error sending your message. Please try again later."
      );
    }
  };
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

            <FormWrapper
              onSubmit={onSubmit}
              resolver={zodResolver(contactSchema)}
            >
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
