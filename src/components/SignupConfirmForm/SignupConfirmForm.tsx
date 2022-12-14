import {
  Form,
  FormHeader,
  FormInput,
  FormPrimaryButton,
} from "@src/atomComponents/Form/Form";
import useAuth from "@src/services/useAuth";
import React, { FC, ReactElement } from "react";
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

const SignupConfirmFormComponent: FC = (): ReactElement => {
  const { confirmSignup } = useAuth();
  return (
    <Form
      onSubmitFn={(data) => confirmSignup(data)}
      styles={{
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto auto auto",
        width: "571px",
        height: "fit-content",
        gap: "72px",
      }}
    >
      <FormHeader>تایید ثبت نام</FormHeader>
      <FormInput
        styles={{
          background: "#3D185B",
          color: "#EDD8FF",
          border: "1px solid #A057DB",
        }}
        id="code"
        label="لطفا کدی که برایتان ارسال شده رو در کارد زیر وارد کنید"
        placeHolder=""
      />
      <FormPrimaryButton>
        <PrimaryButton>تایید ثبت نام</PrimaryButton>
      </FormPrimaryButton>
    </Form>
  );
};
export default SignupConfirmFormComponent;
