import Column from "@src/atomComponents/Grid/Column";
import Row from "@src/atomComponents/Grid/Row";
import { Table, TableHeader, TableRow } from "@src/atomComponents/Table/Table";
import useChoosePlayer from "@src/services/useChoosePlayer";
import React, { FC, ReactElement } from "react";
import styled from "styled-components";
import SearchComponent from "../../atomComponents/SearchComponent/SearchComponent";
import nextUrl from "@assets/Icons/Pagination/previous.svg";
import nextLastUrl from "@assets/Icons/Pagination/previousLast.svg";
import previousUrl from "@assets/Icons/Pagination/next.svg";
import previousLastUrl from "@assets/Icons/Pagination/nextLast.svg";
import ButtonGroup, {
  ButtonGroupBtn,
} from "@src/atomComponents/Button/ButtonGroup";
import { RoleDict } from "@src/types";
import useManagePlayer from "@src/services/useManagePlayer";
import useTranslate from "@src/helpers/useTranslate";

const SpecialContainer = styled(Column)`
  width: 273px;
  height: 838px;

  padding: 0 14px 12px 14px;

  background: white;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.12));
  border-radius: 0 0 16px 16px;
`;

const PositionRow = styled(Row)`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 400;
  font-size: 9px;
  text-align: right;

  color: rgba(61, 25, 91, 0.36);
`;

const NextIcon = styled.img.attrs(() => {
  return { src: nextUrl };
})`
  cursor: pointer;
`;
const NextLastIcon = styled.img.attrs(() => {
  return { src: nextLastUrl };
})`
  cursor: pointer;
`;
const PreviousIcon = styled.img.attrs(() => {
  return { src: previousUrl };
})`
  cursor: pointer;
`;
const PreviousLastIcon = styled.img.attrs(() => {
  return { src: previousLastUrl };
})`
  cursor: pointer;
`;

const Header = styled.h2`
  width: 273px;
  height: 50px;

  background: #3d195b;
  border-radius: 16px 16px 0px 0px;

  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
`;

const PlayerCount = styled.div`
  width: 180px;
  height: 30px;

  background: linear-gradient(269.48deg, #04f5ec -30.14%, #03fbb8 109.7%);
  border-radius: 8px;

  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #000000;
`;

const ChoosePlayerComponent: FC = (): ReactElement => {
  const {
    filterId,
    playerList,
    nextPage,
    previousPage,
    pager,
    filterPlayers,
    searchPlayer,
    firstPage,
    lastPage,
  } = useChoosePlayer();
  const { addSquadPlayer } = useManagePlayer();
  const translate = useTranslate();

  return (
    <Column styles={{}}>
      <Header>???????????? ????????????</Header>
      <SpecialContainer
        styles={{
          gap: "24px",
          alignItems: "center",
        }}
      >
        <SearchComponent searchFn={searchPlayer} />
        <ButtonGroup
          styles={{
            height: "30px",
            width: "40px",
            background:
              "linear-gradient(269.48deg, #04F5EC -30.14%, #03FBB8 109.7%)",
            border: "1px solid #EFEFEF",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: "400",
          }}
          defaultId={filterId}
          onChange={filterPlayers}
        >
          <Row
            styles={{
              gap: "12px",
              justifyContent: "space-around",
            }}
          >
            <ButtonGroupBtn id={0} key={0}>
              All
            </ButtonGroupBtn>
            {Object.keys(RoleDict).map((id, index) => (
              <ButtonGroupBtn id={index + 1} key={id}>
                {RoleDict[id as unknown as number]}
              </ButtonGroupBtn>
            ))}
          </Row>
        </ButtonGroup>
        <PlayerCount>
          {translate(pager.totalItems)} ???????????? ?????????? ???????? ?????? ??????
        </PlayerCount>
        <Column styles={{ justifyContent: "space-between", height: "78%" }}>
          <Table
            styles={{
              width: "225px",
              gap: "8px",
            }}
          >
            <TableHeader styles={{}}>
              <Column styles={{ width: "50%", alignItems: "start" }}>
                ?????? ????????????
              </Column>
              <Column styles={{ width: "20%" }}>????????????</Column>
              <Column styles={{ width: "20%" }}>????????</Column>
            </TableHeader>
            <Column>
              {playerList.map((player, index) => {
                return (
                  <TableRow styles={{ height: "40px" }} key={index}>
                    <Row
                      onClick={() => addSquadPlayer(player)}
                      styles={{
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <Column styles={{ width: "50%" }}>
                        <Row>{player.web_name}</Row>
                        <PositionRow>{player.position}</PositionRow>
                      </Column>
                      <Column styles={{ width: "20%", alignItems: "center" }}>
                        {player.score}
                      </Column>
                      <Column styles={{ width: "20%", alignItems: "center" }}>
                        {player.price}
                      </Column>
                    </Row>
                  </TableRow>
                );
              })}
            </Column>
          </Table>
          <Row
            styles={{
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Row>
              <PreviousLastIcon onClick={firstPage} />
              <PreviousIcon onClick={previousPage} />
            </Row>
            <Row>
              ???????? {translate(pager.currentPage)} ????{" "}
              {translate(pager.totalPages)}
            </Row>
            <Row>
              <NextIcon onClick={nextPage} />
              <NextLastIcon onClick={lastPage} />
            </Row>
          </Row>
        </Column>
      </SpecialContainer>
    </Column>
  );
};

export default ChoosePlayerComponent;
