import Column from "@src/atomComponents/Grid/Column";
import useRecentEvents from "@src/services/useRecentEvents";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import UserRecentActions from "./User/UserRecentActions";

const StyledTitle = styled.h1`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  text-align: right;

  color: #3d195b;
`;

const RecentEventsSection: FC = (): ReactElement => {
  const { friendsRecentEventsList } = useRecentEvents();

  return (
    <Column
      styles={{
        gap: "24px",
      }}
    >
      <StyledTitle>آخرین رویداد‌ها</StyledTitle>
      {friendsRecentEventsList.map((recentEvent) => {
        return <UserRecentActions info={recentEvent} />;
      })}
    </Column>
  );
};

export default RecentEventsSection;
