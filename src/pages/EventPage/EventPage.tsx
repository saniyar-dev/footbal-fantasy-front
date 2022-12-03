import Column from "@src/atomComponents/Grid/Column";
import Row from "@src/atomComponents/Grid/Row";
import SearchWithPreview from "@src/atomComponents/SearchComponent/SearchWithPreview";
import RecentEventsSection from "@src/components/RecentEventsSection/RecentEventsSection";
import FollowerRow from "@src/components/YourFollowersSection/FollowerRow/FollowerRow";
import YourFollowersSection from "@src/components/YourFollowersSection/YourFollowersSection";
import useFriends from "@src/services/useFriends";
import { User } from "@src/types";
import React, { FC, ReactElement, useState } from "react";
import styled from "styled-components";

const StyledColumn = styled(Column)`
  width: 100%;
  margin-bottom: 200px;
  align-items: center;
  gap: 32px;
`;

const EventPage: FC = (): ReactElement => {
  const [searchUserList, setSearchUserList] = useState<Array<User>>([]);
  const { searchUser } = useFriends();
  return (
    <StyledColumn>
      <Row
        styles={{
          width: "572px",
        }}
      >
        <SearchWithPreview
          searchFn={async (str) => setSearchUserList(await searchUser(str))}
          placeHolder="اسم دوستات رو جستجو کن و دنبالشون کن"
        >
          {searchUserList.length > 0
            ? searchUserList.map((user) => <FollowerRow userInfo={user} />)
            : undefined}
        </SearchWithPreview>
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
