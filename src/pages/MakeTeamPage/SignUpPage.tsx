import React from "react";
import styled from "styled-components";
import Players from "../../assets/Icons/EPL Players.svg"
import SignUp from "@src/components/SignUp/SignUp";

const Container = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: row;
    align-items: stretch; 
    background: #3D185B;
`
 const PlayersImg = styled.img.attrs(props => {
    return{
        src: Players
    }
 })``

 const FormContainer = styled.div`
    // background: #3D185B;
    flex-direction: column;
    flex-grow: 1;`
    
const SignUpPage = () => {
    return(
        <Container>
            <FormContainer>
                <SignUp></SignUp>
            </FormContainer>
            <PlayersImg />
        </Container>
    )
}

export default SignUpPage