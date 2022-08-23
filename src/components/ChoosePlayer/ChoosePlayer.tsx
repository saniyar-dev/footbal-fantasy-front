import React, {FC, ReactElement} from "react"
import styled from "styled-components"
import SearchComponent from "../SearchComponent/SearchComponent"

const Container = styled.div`
    width: 273px;
    height: 828px;

    background: #FFFFFF;
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
        </Container>
    )
}

export default ChoosePlayerComponent