import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import ImageUrl from "../../assets/Icons/user-octagon.svg"
const Container = styled.div<{
}>`
width: 274px;
height: 122px;

background: linear-gradient(266.07deg, #04F4F0 2.18%, #02FDA2 125.43%);
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
border-radius: 16px 16px 0px 0px;

display:flex;
justify-content:center;
align-items:center;
gap: 20px;
`

const PlayerLogo = styled.img.attrs(props => {
    return {
        src: ImageUrl
    }
})`
width: 48px;
height: 48px;
`
const Title = styled.h1`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 900;
font-size: 14px;
text-align: center;

color: #3D195B;`

const RemainingPlayerCount = styled.h1`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 900;
font-size: 36px;
text-align: center;

color: #3D195B;`

const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const RemainingPlayer: FC = (): ReactElement => {
    return (
        <Container>
            <LogoContainer>
                
            <PlayerLogo />
            <Title>
                بازیکن باقی مانده
            </Title>
            </LogoContainer>
            <RemainingPlayerCount>
                ۱۵/۱۲
            </RemainingPlayerCount>
        </Container>
    )
}

export default RemainingPlayer