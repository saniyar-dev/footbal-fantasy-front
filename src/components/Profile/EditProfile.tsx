import Column from "@src/atomComponents/Grid/Column";
import React, { FC, ReactElement } from "react";
import Row from "@src/atomComponents/Grid/Row";
import ProfilePic from "@src/atomComponents/ProfilePic/ProfilePic";
import {
  Form,
  FormInput,
  FormPrimaryButton,
} from "@src/atomComponents/Form/Form";
import styled from "styled-components";
import Container from "@src/atomComponents/Grid/Container";
import Button from "@src/atomComponents/Button/Button";
import useProfile from "@src/services/useProfile";

const StyledContainer = styled(Container)`
  justify-content: space-around;
  row-gap: 32px;
  margin-bottom: 50px;
`;

const EditProfile: FC = (): ReactElement => {
  const { editGodInfo } = useProfile();
  return (
    <Column
      styles={{
        gap: "56px",
      }}
    >
      <Row
        styles={{
          justifyContent: "center",
        }}
      >
        <ProfilePic
          src={require("@assets/profilePic.jpg")}
          styles={{ width: "100px" }}
        />
      </Row>
      <Form onSubmitFn={editGodInfo}>
        <StyledContainer
          styles={{
            gridTemplateColumns: "auto auto",
            gridTemplateRows: "auto auto",
            width: "571px",
          }}
        >
          <FormInput
            id="name"
            label="نام"
            placeHolder="مثلا محمود"
            errMessage="اینجا ایرانه ولی تو اسمتو خارجکی تایپ کن"
          />
          <FormInput
            id="lastname"
            label="نام خانوادگی"
            placeHolder="مثلا محمودی"
            errMessage="اینم خارجکی لطف کن"
          />
          <FormInput
            id="email"
            label="ایمیل"
            placeHolder="mahmood@gmail.com"
            errMessage="این قراره کار کنه یه واقعیشو بده"
          />
          <FormInput id="country" label="کشور" placeHolder="قم" />
          <FormInput
            id="username"
            label="نام کاربری"
            placeHolder="mahmoodMahmoodi"
            errMessage="اینجا همه چی خارجکیه"
          />
          <FormInput
            id="password"
            label="رمز عبور"
            placeHolder=""
            errMessage="رمز عبورت باید حداقل ۸ حرف و یه عدد توش باشه و البته که خارجکی"
          />
        </StyledContainer>
        <FormPrimaryButton>
          <Button
            styles={{
              width: "373px",
              height: "48px",
              background: "#00FF87",
              borderRadius: "8px",
            }}
          >
            تایید
          </Button>
        </FormPrimaryButton>
      </Form>
    </Column>
  );
};

export default EditProfile;
