import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import LogoSvg from "../Logo/Logo";

const Container = styled.div<{
}>`
    position: relative;
    background: linear-gradient(269.18deg, #04F3F4 0.06%, #01FC9D 47.08%, #05F4F1 99.26%); 
    border-radius: 0px 0px 16px 16px;
    width: 100%;
    height: 250px;
    padding: 0 6rem 0 6rem;
`

const Title = styled.h1`
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 900;
    font-size: 58px;
    text-align: right;

    color: #37013B;
`
const TitleContainer = styled.div`
    position: absolute;
    display: flex;
    gap: 2rem;
    align-items: center;
    top: 2rem;
`

const Header: FC = (): ReactElement => {
    return (
        <Container>
            <TitleContainer>
                <LogoSvg />
                <Title>فوتبال فانتزی</Title>
            </TitleContainer>
        </Container>
    )
}

export default Header