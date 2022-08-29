import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import LogoSvg from "../../atomComponents/Logo/Logo";
import ImageUrl from '../..//assets/pl_completed_transfers.png'

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

const HeaderImage = styled.img.attrs(props => {
    return {
        src: ImageUrl
    }
})`
    width: 550px;
    height: 261px;
    position: absolute;
    bottom: 0;
    left: 0;
`

const Header: FC = (): ReactElement => {
    return (
        <Container>
            <TitleContainer>
                <LogoSvg />
                <Title>فوتبال فانتزی</Title>
            </TitleContainer>
            <HeaderImage />
        </Container>
    )
}

export default Header