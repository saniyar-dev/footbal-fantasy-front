import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import ChoosePlayerComponent from "../ChoosePlayer/ChoosePlayer";
import Wallet from "../Wallet/Wallet";
import RahnemaLogo from "../RahnemaLogo/RahnemaLogo";
import RemainingPlayer from "../RemainingPlayer/RemainingPlayer";

const GlobalContainer = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 50px;`

const TopContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    gap: 120px`

//RahnemaLogo container
const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column`

const MiddleComponent: FC = (): ReactElement => {
    return (
        <GlobalContainer>
            <ChoosePlayerComponent />
            <TopContainer>
                <Wallet />
                <LogoContainer>
                    <RahnemaLogo />
                     {/* ===========================================add navigation bar here========================================================== */}
                </LogoContainer>
                <RemainingPlayer />
            </TopContainer>
        </GlobalContainer>
    )
}

export default MiddleComponent