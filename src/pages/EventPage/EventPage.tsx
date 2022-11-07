import Column from "@src/atomComponents/Grid/Column";
import Row from "@src/atomComponents/Grid/Row";
import SearchWithPreview from "@src/atomComponents/SearchComponent/SearchWithPreview";
import RecentEventsSection from "@src/components/RecentEventsSection/RecentEventsSection";
import FollowerRow from "@src/components/YourFollowersSection/FollowerRow/FollowerRow";
import YourFollowersSection from "@src/components/YourFollowersSection/YourFollowersSection";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";

const StyledColumn = styled(Column)`
  width: 100%;
  margin-bottom: 200px;
  align-items: center;
  gap: 32px;
`;

const EventPage: FC = (): ReactElement => {
  return (
    <StyledColumn>
      <Row
        styles={{
          width: "572px",
        }}
      >
        <SearchWithPreview
          searchFn={async (str) => console.log(str)}
          placeHolder="اسم دوستات رو جستجو کن و دنبالشون کن"
        ></SearchWithPreview>
      </Row>
      <Row
        styles={{
          gap: "138px",
        }}
      >
        <RecentEventsSection />
        <YourFollowersSection />
      </Row>
    </StyledColumn>
  );
};

export default EventPage;
