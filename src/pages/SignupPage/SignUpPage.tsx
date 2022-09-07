import React from "react";
import styled from "styled-components";
import ImageUrl from "@assets/Images/LoginPlayerImage.png"
// import SignUp from "@src/components/SignUp/SignUp";
// import SignIn from "@src/components/SignIn/SignIn";
// import SignUpCodeConfirmation from "@src/components/SignUpCodeConfirmation/SignUpCodeConfirmation";
import { Form, FormHeader, FormInput, FormPrimaryButton, FormSecondaryButton } from "@src/atomComponents/Form/Form";
import Row from "@src/atomComponents/Grid/Row";
import Column from "@src/atomComponents/Grid/Column";

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
            </FormColumn>
            <Column styles={{
            }}>
                <PlayersImg />
            </Column>
        </BackgroundContainer>
    )
}

export default SignUpPage