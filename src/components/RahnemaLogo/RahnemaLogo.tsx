import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import LogoUrl from "../../assets/Icons/rahnema-college-logo-eng .svg"
const Container = styled.div`
width: 75px;
height: 72px;

background: #FFFFFF;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
border-radius: 8px;`

const Logo = styled.img.attrs(props => {
    return{
        src: LogoUrl
    }
})``;

const RahnemaLogo: FC = (): ReactElement =>{
    return(
        <Container>
            <Logo />
        </Container>
    )
}
export default RahnemaLogo