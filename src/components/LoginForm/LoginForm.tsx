import React, { FC, ReactElement } from "react";
import {
  Form,
  FormHeader,
  FormInput,
  FormPrimaryButton,
  FormSecondaryButton,
} from "@src/atomComponents/Form/Form";
import Column from "@src/atomComponents/Grid/Column";
import Row from "@src/atomComponents/Grid/Row";
import useAuth from "@src/services/useAuth";
import { useNavigate } from "react-router-dom";
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

const SecondaryButton = styled(Button)`
  box-sizing: border-box;
  height: 48px;
  width: 100%;

  background: linear-gradient(#3d185b, #3d185b) padding-box,
    linear-gradient(90deg, #c847af 1.65%, #9b3af9 43.98%) border-box;
  border-radius: 8px;
  border: 2px solid transparent;

  font-weight: 300;
  font-size: 20px;

  color: #ffffff;
`;

const LoginFormComponent: FC = (): ReactElement => {
  const { Login } = useAuth();
  const navigate = useNavigate();

  return (
    <Form
      onSubmitFn={(data) => Login(data)}
      styles={{
        gridTemplateColumns: "auto",
        gridTemplateRows: "auto auto auto",
        gap: "56px",
        width: "571px",
        height: "fit-content",
      }}
    >
      <FormHeader>ورود به فانتزی</FormHeader>
      <Column
        styles={{
          gap: "16px",
        }}
      >
        <FormInput
          styles={{
            background: "#3D185B",
            color: "#EDD8FF",
            border: "1px solid #A057DB",
          }}
          id="username"
          label="نام کاربری"
          placeHolder="asghar"
          errMessage="از گوگل ترنسلیت استفاده کن و اینو خارجکی بده"
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
          errMessage="رمز عبورت باید حداقل ۸ حرف باشه و توش یه عددم داشته باشه"
        />
      </Column>
      <Row
        styles={{
          gap: "24px",
        }}
      >
        <FormPrimaryButton>
          <PrimaryButton>ورود</PrimaryButton>
        </FormPrimaryButton>
        <FormSecondaryButton
          onClickFn={() => {
            navigate("/user/signup");
          }}
        >
          <SecondaryButton>ثبت نام</SecondaryButton>
        </FormSecondaryButton>
      </Row>
    </Form>
  );
};
export default LoginFormComponent;
