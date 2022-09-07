import React, { useState } from "react";
import styled from "styled-components";
import ImageUrl from "@assets/Images/LoginPlayerImage.png"
import Row from "@src/atomComponents/Grid/Row";
import Column from "@src/atomComponents/Grid/Column";

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
    return(
        <BackgroundContainer styles={{
            height: '100vh',
        }}>
            <FormColumn styles={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
<<<<<<< HEAD
                {
                    formStatus === "login" ?
                     <LoginFormComponent setStatus={setFormStatus}/> :
                    formStatus === "signup" ? 
                    <SignupFormComponent setStatus={setFormStatus} /> : 
                    <SignupConfirmFormComponent />
                }
=======
                <Form onSubmitFn={(data) => {console.log(data)}} styles={{
                    gridTemplateColumns: 'auto',
                    gridTemplateRows: 'auto auto auto',
                    gap: '56px',
                    width: '571px',
                    height: 'fit-content',
                }}>
                    <FormHeader>
                        ورود به فانتزی
                    </FormHeader>
                    <Column styles={{
                        gap: '16px'
                    }}>
                        <FormInput id="username" label="نام کاربری" placeHolder="" />
                        <FormInput id="password" label="رمز عبور" placeHolder="" />
                    </Column>
                    <Row styles={{
                        gap: '24px'
                    }}>
                        <FormPrimaryButton>ورود</FormPrimaryButton>
                        <FormSecondaryButton onClickFn={() => {console.log('go to registery')}}>ثبت نام</FormSecondaryButton>
                    </Row>
                </Form>
>>>>>>> 7f1fbc0 (fix: style fixed)
            </FormColumn>
            <Column styles={{
            }}>
                <PlayersImg />
            </Column>
        </BackgroundContainer>
    )
}

export default SignUpPage