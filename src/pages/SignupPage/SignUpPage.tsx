import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageUrl from "@assets/Images/LoginPlayerImage.png"
import Row from "@src/atomComponents/Grid/Row";
import Column from "@src/atomComponents/Grid/Column";
import {useNavigate, useParams} from 'react-router-dom'

import LoginFormComponent from "@src/components/LoginForm/LoginForm";
import SignupFormComponent from "@src/components/SignUpForm/SignUpForm";
import SignupConfirmFormComponent from "@src/components/SignupConfirmForm/SignupConfirmForm";

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

type FormStatusType = "login" | "signup" | "confirm"

const SignUpPage = () => {
    const [formStatus, setFormStatus] = useState<FormStatusType>("login")
    const navigate = useNavigate();
    const {type} = useParams();

    useEffect(() => {
        navigate(`/user/${formStatus}`)
    }, [formStatus])

    useEffect(() => {
        if (type === "login" || type === "signup" || type === "confirm") {
            setFormStatus(type)
        }
    }, [type])
    return(
        <BackgroundContainer styles={{
            height: '100vh',
        }}>
            <FormColumn styles={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {
                    formStatus === "login" ?
                    <LoginFormComponent setStatus={setFormStatus} /> :
                    formStatus === "signup" ? 
                    <SignupFormComponent setStatus={setFormStatus} /> :
                    <SignupConfirmFormComponent />
                }
            </FormColumn>
            <Column styles={{
            }}>
                <PlayersImg />
            </Column>
        </BackgroundContainer>
    )
}

export default SignUpPage