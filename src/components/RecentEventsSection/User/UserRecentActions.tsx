import React, { FC, ReactElement } from "react";
import Icon from "@src/atomComponents/Icon/Icon";
import Row from "@src/atomComponents/Grid/Row";
import styled from "styled-components";
import fakeUrl from "@assets/Images/profile/fake1.jpg";
import heartIconUrl from "@assets/Icons/heart.svg";
import starIconUrl from "@assets/Icons/star.svg";
import arrowUpUrl from "@assets/Icons/arrow-up.svg";
import arrowDownUrl from "@assets/Icons/arrow-down.svg";
import Column from "@src/atomComponents/Grid/Column";
import ProfilePic from "@src/atomComponents/ProfilePic/ProfilePic";
import { RecentEvent } from "@src/types";
import useTranslate from "@src/helpers/useTranslate";

const StyledRow = styled(Row)`
  width: 640px;
  height: 180px;

  gap: 24px;
  justify-content: space-around;
  align-items: center;

  background: #fbfbfb;
  border-radius: 8px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;

  border-radius: 250px;
`;

const StyledName = styled.p`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;

  color: #3d195b;
`;

const StyledDetail = styled(Row)`
  justify-content: space-between;
  align-items: center;
  width: 484px;
  height: 160px;
  padding-right: 24px;

  background: #ffffff;
  border-radius: 8px;
`;

const StyledWeek = styled.div`
  height: 30px;
  width: 106px;

  background: rgba(61, 25, 91, 0.06);
  border-radius: 4px;

  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #3d195b;

  transform: rotate(-90deg);
`;

const StyledScore = styled(Row)`
  width: 66px;
  height: 30px;

  justify-content: center;
  align-items: center;
  gap: 2px;

  background: linear-gradient(269.48deg, #04f5ec -30.14%, #03fbb8 109.7%);
  border-radius: 4px;

  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;

  color: #3d195b;
`;

const StyledDetailTitle = styled.p`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;
  text-align: right;

  color: #3d195b;
`;

const weekMap: Record<number, String> = {
  1: "اول",
  2: "دوم",
  3: "سوم",
  4: "چهارم",
  5: "پنجم",
  6: "شیشم",
  7: "هفتم",
};

const UserRecentActions: FC<{
  info: RecentEvent;
}> = ({ info }): ReactElement => {
  const translate = useTranslate();
  return (
    <StyledRow>
      <Column
        styles={{
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Column
          styles={{
            gap: "8px",
          }}
        >
          <ProfilePic styles={{ width: "80px" }} src={fakeUrl} />
          <StyledName>{info.user.name}</StyledName>
        </Column>
        <Icon width="20px" height="20px" src={heartIconUrl} />
      </Column>
      <StyledDetail>
        <Column
          styles={{
            gap: "12px",
          }}
        >
          <Row
            styles={{
              gap: "16px",
            }}
          >
            <StyledDetailTitle>امتیاز هفته</StyledDetailTitle>
            <StyledScore>
              <Icon width="20px" height="20px" src={starIconUrl} />
              <div>{translate(info.point)}</div>
            </StyledScore>
          </Row>
          <Column
            styles={{
              gap: "8px",
            }}
          >
            <StyledDetailTitle>تعویض‌ها</StyledDetailTitle>
            {info.substitution.map((subs) => {
              return (
                <Row
                  styles={{
                    gap: "16px",
                  }}
                >
                  <Row
                    styles={{
                      gap: "4px",
                    }}
                  >
                    <Icon width="20px" height="20px" src={arrowUpUrl} />
                    <StyledName>{subs.playerInName}</StyledName>
                  </Row>
                  <Row
                    styles={{
                      gap: "4px",
                    }}
                  >
                    <Icon width="20px" height="20px" src={arrowDownUrl} />
                    <StyledName>{subs.playerOutName}</StyledName>
                  </Row>
                </Row>
              );
            })}
          </Column>
        </Column>
        <StyledWeek># هفته {weekMap[info.week]}</StyledWeek>
      </StyledDetail>
    </StyledRow>
  );
};

export default UserRecentActions;
