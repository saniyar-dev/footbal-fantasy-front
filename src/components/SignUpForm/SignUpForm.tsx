import React, { FC, ReactElement } from "react";
import {
  Form,
  FormHeader,
  FormInput,
  FormPrimaryButton,
} from "@src/atomComponents/Form/Form";
import Container from "@src/atomComponents/Grid/Container";
import useAuth from "@src/services/useAuth";
import styled from "styled-components";
import Button from "@src/atomComponents/Button/Button";

const PrimaryButton = styled(Button)`
  background: linear-gradient(90deg, #cf31b9 0%, #9b3af9 73.44%);
  border-radius: 8px;
  height: 48px;
  width: 100%;

  font-weight: 700;
  font-size: 20px;

  color: #ffffff;
`;

const SignupFormComponent: FC = (): ReactElement => {
  const { Signup } = useAuth();
  return (
    <Form
      onSubmitFn={(data) => Signup(data)}
      styles={{
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto auto auto",
        gap: "48px",
        width: "571px",
        height: "fit-content",
      }}
    >
      <FormHeader>فرم ثبت نام</FormHeader>
      <Container
        styles={{
          gridTemplateColumns: "auto auto",
          gridTemplateRows: "auto auto auto",
          gap: "24px",
        }}
      >
        <FormInput
          styles={{
            background: "#3D185B",
            color: "#EDD8FF",
            border: "1px solid #A057DB",
          }}
          id="name"
          label="نام"
          placeHolder="مثلا محمود"
          errMessage="اینجا ایرانه ولی تو اسمتو خارجکی تایپ کن"
        />
        <FormInput
          styles={{
            background: "#3D185B",
            color: "#EDD8FF",
            border: "1px solid #A057DB",
          }}
          id="lastname"
          label="نام خانوادگی"
          placeHolder="مثلا محمودی"
          errMessage="اینم خارجکی لطف کن"
        />
        <FormInput
          styles={{
            background: "#3D185B",
            color: "#EDD8FF",
            border: "1px solid #A057DB",
          }}
          id="email"
          label="ایمیل"
          placeHolder="mahmood@gmail.com"
          errMessage="این قراره کار کنه یه واقعیشو بده"
        />
        <FormInput
          styles={{
            background: "#3D185B",
            color: "#EDD8FF",
            border: "1px solid #A057DB",
          }}
          id="country"
          label="کشور"
          placeHolder="قم"
        />
        <FormInput
          styles={{
            background: "#3D185B",
            color: "#EDD8FF",
            border: "1px solid #A057DB",
          }}
          id="username"
          label="نام کاربری"
          placeHolder="mahmoodMahmoodi"
          errMessage="اینجا همه چی خارجکیه"
        />
        <FormInput
          styles={{
            background: "#3D185B",
            color: "#EDD8FF",
            border: "1px solid #A057DB",
          }}
          id="password"
          label="رمز عبور"
          placeHolder=""
          errMessage="رمز عبورت باید حداقل ۸ حرف و یه عدد توش باشه و البته که خارجکی"
        />
      </Container>
      <FormPrimaryButton>
        <PrimaryButton>ثبت نام</PrimaryButton>
      </FormPrimaryButton>
    </Form>
  );
};
export default SignupFormComponent;
