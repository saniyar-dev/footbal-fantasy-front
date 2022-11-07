import Column from "@src/atomComponents/Grid/Column";
import Row from "@src/atomComponents/Grid/Row";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import fakeProfileUrl from "@assets/Images/profile/fake1.jpg";
import Button from "@src/atomComponents/Button/Button";
import useModal from "@src/helpers/useModal";
import ProfilePic from "@src/atomComponents/ProfilePic/ProfilePic";
import { User } from "@src/types";

const StyledColumn = styled(Column)`
  width: 575px;
  height: 547px;

  justify-content: center;
  align-items: center;
  gap: 32px;

  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
`;

const FieldName = styled.span`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const FieldDesc = styled.span`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
`;

const FollowUserModal: FC<{ userInfo: User }> = ({
  userInfo,
}): ReactElement => {
  const { removeLastModal } = useModal();
  return (
    <StyledColumn>
      <ProfilePic styles={{ width: "150px" }} src={fakeProfileUrl} />
      <Button
        styles={{
          width: "200px",
          height: "50px",
          background: "#05D6E2",
          fontSize: "16px",
          fontWeight: "800",
        }}
        onClick={(e) => {
          e.preventDefault();
          // connect to server
          removeLastModal();
        }}
      >
        دنبال کردن
      </Button>
      <Column
        styles={{
          gap: "16px",
          alignItems: "center",
        }}
      >
        <Row>
          <FieldName>نام:&nbsp;</FieldName>
          <FieldDesc> {userInfo.name}</FieldDesc>
        </Row>
        <Row>
          <FieldName>سن:&nbsp;</FieldName>
          <FieldDesc>۲۶ سال</FieldDesc>
        </Row>
        <Row>
          <FieldName>کشور:&nbsp;</FieldName>
          <FieldDesc>{userInfo.country}</FieldDesc>
        </Row>
        {/* <Row>
          <FieldName>اخرین امتیاز:</FieldName>
          <FieldDesc>{userInfo.point}</FieldDesc>
        </Row> */}
      </Column>
    </StyledColumn>
  );
};

export default FollowUserModal;
