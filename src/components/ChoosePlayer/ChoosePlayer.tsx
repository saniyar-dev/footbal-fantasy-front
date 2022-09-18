import Column from "@src/atomComponents/Grid/Column"
import Row from "@src/atomComponents/Grid/Row"
import { Table, TableHeader, TableRow } from "@src/atomComponents/Table/Table"
import useChoosePlayer from "@src/services/useChoosePlayer"
import React, {FC, ReactElement, useEffect} from "react"
import styled from "styled-components"
import SearchComponent from "../../atomComponents/SearchComponent/SearchComponent"
import PlayerCount from "./PlayerCount/PlayerCount"
import nextUrl from '@assets/Icons/Pagination/previous.svg'
import nextLastUrl from '@assets/Icons/Pagination/previousLast.svg'
import previousUrl from '@assets/Icons/Pagination/next.svg'
import previousLastUrl from '@assets/Icons/Pagination/nextLast.svg'
import ButtonGroup, { ButtonGroupBtn } from "@src/atomComponents/Button/ButtonGroup"
import { RoleDict } from "@src/types"
import useManagePlayer from "@src/services/useManagePlayer"
import useTranslate from "@src/helpers/useTranslate"

const SpecialContainer = styled(Column)`
    width: 273px;
    height: 828px;
    box-sizing: content-box;

    padding-bottom: 12px;

    background: white;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.12));
    border-radius: 0 0 16px 16px;
`

const PositionRow = styled(Row)`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 400;
font-size: 9px;
text-align: right;

color: rgba(61, 25, 91, 0.36);

`

const NextIcon = styled.img.attrs(() => {
    return { src: nextUrl }
})`
cursor: pointer;
`
const NextLastIcon = styled.img.attrs(() => {
    return { src: nextLastUrl }
})`
cursor: pointer;
`
const PreviousIcon = styled.img.attrs(() => {
    return { src: previousUrl}
})`
cursor: pointer;
`
const PreviousLastIcon = styled.img.attrs(() => {
    return { src: previousLastUrl}
})`
cursor: pointer;
`

const Header = styled.h2`
    width: 273px;
    height: 50px;

    background: #3D195B;
    border-radius: 16px 16px 0px 0px;

    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    text-align: center;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #FFFFFF;
`

const ChoosePlayerComponent: FC = (): ReactElement => {
    const {playerList, getByLimit, nextPage, previousPage, currentPage, filterPlayers, searchPlayer} = useChoosePlayer()
    const {addPlayer} = useManagePlayer()
    const translate = useTranslate();

    useEffect(() => {
        getByLimit()
    }, [])
    return (
            <Column styles={{}}>
                <Header>انتخاب بازیکن</Header>
                <SpecialContainer styles={{
                    gap: '24px',
                    alignItems: 'center'
                }}>
                    <SearchComponent searchFn={searchPlayer} />
                    <ButtonGroup
                    styles={{
                        defaultHeight: 30,
                        defaultWidth: 40,
                        activeBgColor:  "linear-gradient(269.48deg, #04F5EC -30.14%, #03FBB8 109.7%)",
                        defaultBgColor: 'white',
                        border: {
                            radius: 8,
                            value: '1px solid #EFEFEF'
                        },
                        font: {
                            fontSize: 12,
                            fontWeight: 400,
                        },
                    }}
                    defaultId={0}
                    onChange={filterPlayers}
                    >
                        <Row styles={{
                            gap: '12px',
                            justifyContent: 'space-around',
                        }}>
                            <ButtonGroupBtn id={0} key={0}>All</ButtonGroupBtn>
                        {
                            Object.keys(RoleDict).map((id) => 
                            <ButtonGroupBtn id={id as unknown as number} key={id}>{RoleDict[id as unknown as number]}</ButtonGroupBtn>
                            )
                        }
                        </Row>
                    </ButtonGroup>
                    <PlayerCount />
                    <Table styles={{
                        width: '225px',
                        gap: '8px'
                    }}>
                        <TableHeader styles={{}}>
                            <Column styles={{width: '50%', alignItems: 'start'}}>
                                نام بازیکن
                            </Column>
                            <Column styles={{width: '20%'}}>
                                عملکرد
                            </Column>
                            <Column styles={{width: '20%'}}>
                            قیمت 
                            </Column>
                        </TableHeader>
                        <Column>
                            {
                                playerList.map(player => {
                                    return <TableRow styles={{height: '40px'}} >
                                        <Row onClick={() => addPlayer(player)} styles={{alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                                            <Column styles={{width: '50%' }}>
                                                <Row>
                                                    {player.web_name}
                                                </Row>
                                                <PositionRow>
                                                    {player.position}
                                                </PositionRow>
                                            </Column>
                                            <Column styles={{width: '20%', alignItems: 'center'}}>{player.score}</Column>
                                            <Column styles={{width: '20%', alignItems: 'center'}}>{player.price}</Column>
                                        </Row>
                                    </TableRow>
                                })
                            }
                        </Column>
                    </Table>
                    <Row styles={{justifyContent: 'center', alignItems: 'center', gap: '8px'}}>
                        <Row>
                            <PreviousLastIcon onClick={() => {}} />
                            <PreviousIcon onClick={previousPage} />
                        </Row>
                        <Row>
                            صفحه {translate(currentPage)} از ۱۷
                        </Row>
                        <Row>
                            <NextIcon onClick={nextPage} />
                            <NextLastIcon onClick={() => {}} />
                        </Row>
                    </Row>
                </SpecialContainer>
            </Column>
    )
}

export default ChoosePlayerComponent