import React from "react";
import styled from "styled-components";
import ImageUrl from "@assets/Images/LoginPlayerImage.png"
import Row from "@src/atomComponents/Grid/Row";
import Column from "@src/atomComponents/Grid/Column";

import LoginFormComponent from "@src/components/Login/Login";

const BackgroundContainer = styled(Row)`
    background: #3D185B;
`

const FormColumn = styled(Column)`
flex-grow: 1;
`

const PlayersImg = styled.img.attrs(props => {
    return{
        src: ImageUrl
    }
 })`
 height: 100vh !important;
 width: auto;
`

const SignUpPage = () => {
    return(
        <BackgroundContainer styles={{
            height: '100vh',
        }}>
            <FormColumn styles={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <LoginFormComponent />
            </FormColumn>
            <Column styles={{
            }}>
                <PlayersImg />
            </Column>
        </BackgroundContainer>
    )
}

export default SignUpPage