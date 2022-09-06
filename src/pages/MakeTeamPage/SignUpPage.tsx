import React from "react";
import styled from "styled-components";
import Players from "../../assets/Icons/EPL Players.svg"
import SignUp from "@src/components/SignUp/SignUp";
import Container from "@src/atomComponents/Grid/Container";
import SignIn from "@src/components/SignIn/SignIn";
import SignUpCodeConfirmation from "@src/components/SignUpCodeConfirmation/SignUpCodeConfirmation";

const SpecialContainer = styled(Container)`
    background: #3D185B;
    display: flex;
    justify-content: center;
    align-items: center;
`
const PlayersImg = styled.img.attrs(props => {
    return{
        src: Players
    }
 })`
 height: 100vh;
 width: auto;
`

 const FormContainer = styled.div`
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`
    
const SignUpPage = () => {
    return(
        <SpecialContainer styles={{
            gridTemplateColumns: 'auto 574px',
            gridTemplateRows: 'auto',
            height: '100vh',
        }}>
            <FormContainer>
                <SignIn></SignIn>
            </FormContainer>
            <PlayersImg />
        </SpecialContainer>
    )
}

export default SignUpPage