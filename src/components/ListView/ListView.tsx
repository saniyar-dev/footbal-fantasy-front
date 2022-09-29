import React, {FC, ReactElement} from "react";
// import {squadPlayers} from "@state/players"
import styled from "styled-components";
// import { useRecoilState } from "recoil";
import { Role } from "@src/types";
import { Table, TableHeader, TableRow, TableTitle } from "@src/atomComponents/Table/Table";
import Container from "@src/atomComponents/Grid/Container";
import Column from "@src/atomComponents/Grid/Column";
import LogoUrl from "@assets/PremierLogoWhite.svg"
import useAppState from "@src/services/useAppState";

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

const PremireLogo = styled.img.attrs(props => {return {src: LogoUrl}} )`
    width: 149px;
    height: 63px;
`

const SpecialTableColumn = styled(Column)`
justify-content: center;
align-items: center;
`

const SpecialPreviewColumn = styled(Column)`
align-items: center;
justify-content: end;

background: #3D195B;
border-radius: 16px 0px 0px 16px;
`

const ListView: FC = (): ReactElement => {
    // const [players, ] = useRecoilState(squadPlayers)
    const {squadPlayers} = useAppState()
    return (
        <Container styles={{
            gridTemplateColumns: 'auto 274px',
        }}>
            <SpecialTableColumn styles={{}}>
            <Table styles={{
                gap: '16px',
                width: '541px',
            }}>
                <TableHeader styles={{width: '541px', height: '30px'}}>
                    <Column styles={{width: '50%', alignItems: 'start'}}>
                        {' '}
                    </Column>
                    <Column styles={{width: '20%', alignItems: 'center'}}>
                        عملکرد
                    </Column>
                    <Column styles={{width: '20%', alignItems: 'center'}}>
                        قیمت
                    </Column>
                </TableHeader>
                {
                    roleHeaderList.map((roleHeader) => {
                        return (
                            <>
                                <TableTitle styles={{
                                    width: '125px',
                                    height: '25px',
                                }}>{roleHeader.title}</TableTitle>
                                {
                                    squadPlayers.filter(player => player.position === roleHeader.type).map(player => {
                                        return <TableRow styles={{}}>
                                                <Column styles={{width: '50%', alignItems: 'start'}}>{player.web_name}</Column>
                                                <Column styles={{width: '20%', alignItems: 'center'}}>{player.score}</Column>
                                                <Column styles={{width: '20%', alignItems: 'center'}}>{player.price}</Column>
                                        </TableRow>
                                    })
                                }
                            </>
                        )
                    })
                }
            </Table>
            </SpecialTableColumn>
            
            <SpecialPreviewColumn styles={{
                gap: '24px'
            }}>
                <img src={require('@assets/Images/Valencia_college-2-min 1.png')} alt="player preview" width={"202px"}/>
                <PremireLogo />
                <img src={require('@assets/PremierLeagueRebrands.png')} alt="premier league rebrands"/>
            </SpecialPreviewColumn>
        </Container>
    )
}

export default ListView
