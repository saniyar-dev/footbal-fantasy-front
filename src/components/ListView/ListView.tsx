import React, {FC, ReactElement} from "react";
import PlayerPreview from "./PlayerPreview/PlayerPreview";
import myPlayers from "@state/players"
import { useRecoilState } from "recoil";
import { Role } from "@src/types";
import { Table, TableHeader, TableRow, TableTitle } from "@src/atomComponents/Table/Table";
import Container from "@src/atomComponents/Grid/Container";
import Column from "@src/atomComponents/Grid/Column";

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


const ListView: FC = (): ReactElement => {
    const [players, ] = useRecoilState(myPlayers)
    return (
        <Container styles={{}}>
            <Table styles={{
                gap: '16px',
                width: '541px',
            }}>
                <TableHeader styles={{width: '541px', height: '30px'}}>
                    <Column styles={{}}>
                        {' '}
                    </Column>
                    <Column styles={{}}>
                        عملکرد
                    </Column>
                    <Column styles={{}}>
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
                                    players.filter(player => player.role === roleHeader.type).map(player => {
                                        return <TableRow styles={{}}>
                                                <Column styles={{}}>{player.name}</Column>
                                                <Column styles={{}}>{player.score}</Column>
                                                <Column styles={{}}>{player.price}</Column>
                                        </TableRow>
                                    })
                                }
                            </>
                        )
                    })
                }
            </Table>
        </Container>
    )
}

export default ListView
