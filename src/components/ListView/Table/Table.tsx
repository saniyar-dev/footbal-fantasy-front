import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import myPlayers from "@state/players"
import { Role } from "@src/types";
import ListItem from "@src/atomComponents/List/ListItem";
import atomTable from "@src/atomComponents/Table/Table";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Header = styled.div`
  box-sizing: border-box;

  width: 541px;
  height: 20px;

  background: #ffffff;
  border-bottom: 1px solid #efefef;
  display: flex;
  justify-content: space-between;
`;

const HeaderText = styled.span`
  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  text-align: center;

  color: #999999;
`;

const RoleHeader = styled.div`
  width: 150px;
  height: 25px;

  background: #3d195b;
  border-radius: 4px;

  font-family: "Vazirmatn";
  font-style: normal;
  font-weight: 800;
  font-size: 14px;

  display: flex;
  align-items: center;
  padding-right: 12px;

  text-align: right;

  color: #00ff87;
`;

const RoleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const roleHeaderList: Array<{type: Role, title: string}> = [
    {
        type: "GK",
        title: "دروازه بان"
    },
    {
        type: "DEF",
        title: "مدافعان"
    },
    {
        type: "MID",
        title: "هافبک‌ها"
    },
    {
        type: "ATT",
        title: "مهاجمین"
    },
]

const Table: FC = (): ReactElement => {
    const [players, ] = useRecoilState(myPlayers)

    return <Container>
        <Header>
            <HeaderText>
            {' '}
            </HeaderText>
            <HeaderText>
                عملکرد
            </HeaderText>
            <HeaderText>
                قیمت
            </HeaderText>
        </Header>
        {
            roleHeaderList.map((roleHeader) => {
                return (
                    <RoleContainer>
                        <RoleHeader>{roleHeader.title}</RoleHeader>
                        {
                            players.filter(player => player.role === roleHeader.type).map(player => {
                                return <ListItem 
                                name={player.name} 
                                staticNumbers={{
                                    performance: player.score,
                                    price: player.price,
                                }}
                                key={player.id}
                                styles={{
                                    defaultWidth: 541,
                                    defaultHeight: 30,
                                    border: {
                                        radius: 0,
                                        value: "1px solid #EFEFEF"
                                    },
                                }}
                                />
                            })
                        }
                    </RoleContainer>
                )
            })
        }
    </Container>
}

export default Table