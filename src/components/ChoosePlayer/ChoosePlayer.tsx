import React, {FC, ReactElement} from "react"
import styled from "styled-components"
import SearchComponent from "../SearchComponent/SearchComponent"
import FilterComponent from "./Filter/Filter"
import PlayerCount from "./PlayerCount/PlayerCount"

const Container = styled.div`
    width: 273px;
    height: 828px;

    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
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
    return (
        <Container>
            <Header>انتخاب بازیکن</Header>
            <SearchComponent />
            <FilterComponent />
            <PlayerCount />
        </Container>
    )
}

export default ChoosePlayerComponent