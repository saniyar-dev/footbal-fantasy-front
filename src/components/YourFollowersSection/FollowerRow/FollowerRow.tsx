import { TableRow } from "@src/atomComponents/Table/Table";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import profileUrl from "@assets/Images/profile/fake1.jpg";
import Row from "@src/atomComponents/Grid/Row";
import useModal from "@src/helpers/useModal";
import Button from "@src/atomComponents/Button/Button";
import ProfilePic from "@src/atomComponents/ProfilePic/ProfilePic";
import { User } from "@src/types";

const StyledName = styled.p`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;
  text-align: right;

  color: #3d195b;
`;

const FollowerRow: FC<{ user: User }> = ({ user }): ReactElement => {
  const { addModal } = useModal();
  return (
    <TableRow styles={{}}>
      <Row
        styles={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: "50px",
        }}
      >
        <Row
          styles={{
            alignItems: "center",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <ProfilePic styles={{ width: "40px" }} src={profileUrl} />
          <StyledName>{user.name}</StyledName>
        </Row>
        <Button
          styles={{
            width: "70px",
            height: "30px",
            background: "white",
            color: "#555555",
            fontSize: "12px",
            fontWeight: "300",
            border: "1px solid #E8E8E8",
            borderRadius: "4px",
          }}
          onClick={() => addModal({ _tag: "follow-user", userInfo: user })}
        >
          مشاهده
        </Button>
      </Row>
    </TableRow>
  );
};

export default FollowerRow;
