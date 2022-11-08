import Container from "@src/atomComponents/Grid/Container";
import React, { FC, ReactElement } from "react";
import Row from "@src/atomComponents/Grid/Row";
import ProfilePic from "@src/atomComponents/ProfilePic/ProfilePic";
import Column from "@src/atomComponents/Grid/Column";
import styled from "styled-components";
import Button from "@src/atomComponents/Button/Button";
import editIconUrl from "@assets/Icons/edit.svg";
import Icon from "@src/atomComponents/Icon/Icon";
import { useNavigate } from "react-router-dom";
import useProfile from "@src/services/useProfile";

const FieldTitle = styled.div`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #333333;
`;

const FieldDescription = styled.div`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;

  display: flex;
  align-items: center;
  text-align: center;

  color: #3d195b;
`;

const StyledContainer = styled(Container)`
  justify-content: space-around;
  row-gap: 32px;
`;

const PassDots = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;

  background: #3d195b;
`;

const ProfilePreview: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { godInfo } = useProfile();
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
      <StyledContainer
        styles={{
          gridTemplateColumns: "auto auto",
          gridTemplateRows: "auto auto",
          width: "571px",
        }}
      >
        <Column
          styles={{
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FieldTitle>نام</FieldTitle>
          <FieldDescription>{godInfo.name.split(" ")[0]}</FieldDescription>
        </Column>
        <Column
          styles={{
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FieldTitle>نام خانوادگی</FieldTitle>
          <FieldDescription>{godInfo.name.split(" ")[1]}</FieldDescription>
        </Column>
        <Column
          styles={{
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FieldTitle>ایمیل</FieldTitle>
          <FieldDescription>saniyar.dev@gmail.com</FieldDescription>
        </Column>
        <Column
          styles={{
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FieldTitle>کشور</FieldTitle>
          <FieldDescription>{godInfo.country}</FieldDescription>
        </Column>
        <Column
          styles={{
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FieldTitle>نام کاربری</FieldTitle>
          <FieldDescription>{godInfo.username}</FieldDescription>
        </Column>
        <Column
          styles={{
            alignItems: "center",
            gap: "12px",
          }}
        >
          <FieldTitle>رمز عبور</FieldTitle>
          <FieldDescription>
            <Row styles={{ gap: "3px" }}>
              {[...Array(8)].map((_, index) => (
                <PassDots key={index} />
              ))}
            </Row>
          </FieldDescription>
        </Column>
      </StyledContainer>
      <Row
        styles={{
          justifyContent: "center",
        }}
      >
        <Button
          styles={{
            width: "372px",
            height: "48px",
            background: "white",
            border: "1px solid #3D195B",
            borderRadius: "8px",
            color: "#3D195B",
            fontSize: "16px",
            fontWeight: "600",
          }}
          onClick={() => navigate("/app/profile/edit")}
        >
          <Row
            styles={{
              gap: "6px",
            }}
          >
            <Icon src={editIconUrl} width="24px" />
            ویرایش
          </Row>
        </Button>
      </Row>
    </Column>
  );
};

export default ProfilePreview;
