import ButtonGroup, {
  ButtonGroupBtn,
} from "@src/atomComponents/Button/ButtonGroup";
import Column from "@src/atomComponents/Grid/Column";
import Row from "@src/atomComponents/Grid/Row";
import SearchComponent from "@src/atomComponents/SearchComponent/SearchComponent";
import SectionHeader from "@src/atomComponents/SectionHeader/SectionHeader";
import { Table } from "@src/atomComponents/Table/Table";
import useFriends from "@src/services/useFriends";
import { User } from "@src/types";
import React, { FC, ReactElement, useState, useEffect } from "react";
import styled from "styled-components";
import FollowerRow from "./FollowerRow/FollowerRow";

const StyledColumn = styled(Column)`
  width: 373px;
  height: 876px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.12));
`;
const StyledBox = styled(Column)`
  padding: 32px 24px 0 24px;
  gap: 24px;
  width: 373px;
  height: 828px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 16px 16px;
`;

const mockFollowers = [
  {
    userId: 0,
  },
  {
    userId: 1,
  },
  {
    userId: 2,
  },
  {
    userId: 3,
  },
  {
    userId: 4,
  },
];

type Filter = "followers" | "followings";

const YourFollowersSection: FC = (): ReactElement => {
  const { getFollowers, getFollowings } = useFriends();

  const [filter, setFilterState] = useState<Filter>("followers");
  const setFilter = (id: number) => {
    console.log(id);
    if (id === 0) setFilterState("followers");
    else setFilterState("followings");
  };

  const [userList, setUserListState] = useState<Array<User>>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (filter === "followers") setUserListState(await getFollowers());
      else setUserListState(await getFollowings());
    };

    fetchData().catch((err) => console.log(err));
  }, [filter]);

  return (
    <StyledColumn>
      <SectionHeader>دوستان شما</SectionHeader>
      <StyledBox>
        <Row
          styles={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonGroup
            styles={{
              width: "148px",
              height: "30px",
              background:
                "linear-gradient(269.48deg, #04F5EC -30.14%, #03FBB8 109.7%)",
              border: "1px solid #03FBB8",
              borderRadius: "4px",
              fontSize: "12px",
              fontWeight: "800",
            }}
            onChange={(id) => setFilter(id)}
            defaultId={0}
          >
            <Row
              styles={{
                gap: "24px",
              }}
            >
              <ButtonGroupBtn id={0} key={0}>
                دنبال کنندگان
              </ButtonGroupBtn>
              <ButtonGroupBtn id={1} key={1}>
                دنبال شوندگان
              </ButtonGroupBtn>
            </Row>
          </ButtonGroup>
        </Row>
        <SearchComponent searchFn={async (str) => console.log(str)} />
        <Table styles={{ gap: "16px" }}>
          {userList.map((user) => {
            return <FollowerRow userInfo={user} />;
          })}
        </Table>
      </StyledBox>
    </StyledColumn>
  );
};

export default YourFollowersSection;
