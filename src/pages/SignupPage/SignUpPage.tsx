import React from "react";
import styled from "styled-components";
import ImageUrl from "@assets/Images/LoginPlayerImage.png"
import Row from "@src/atomComponents/Grid/Row";
import Column from "@src/atomComponents/Grid/Column";
import {Outlet} from 'react-router-dom'


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
                <Outlet />
            </FormColumn>
            <Column styles={{
            }}>
                <PlayersImg />
            </Column>
        </BackgroundContainer>
    )
}

export default SignUpPage