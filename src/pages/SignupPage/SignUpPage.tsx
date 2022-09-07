import React from "react";
import styled from "styled-components";
import Players from "../../assets/Icons/EPL Players.svg"
// import SignUp from "@src/components/SignUp/SignUp";
import Container from "@src/atomComponents/Grid/Container";
// import SignIn from "@src/components/SignIn/SignIn";
// import SignUpCodeConfirmation from "@src/components/SignUpCodeConfirmation/SignUpCodeConfirmation";
import { Form, FormHeader, FormInput, FormPrimaryButton, FormSecondaryButton } from "@src/atomComponents/Form/Form";
import Row from "@src/atomComponents/Grid/Row";
import Column from "@src/atomComponents/Grid/Column";

const SpecialContainer = styled(Container)`
    background: #3D185B;
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

const SignUpPage = () => {
    return(
        <SpecialContainer styles={{
            gridTemplateColumns: 'auto 574px',
            gridTemplateRows: 'auto',
            height: '100vh',
        }}>
            <Form onSubmitFn={(data) => {console.log(data)}} styles={{
                gridTemplateColumns: 'auto',
                gridTemplateRows: 'auto auto auto',
                gap: '56px',
                width: '571px',
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
            <PlayersImg />
        </SpecialContainer>
    )
}

export default SignUpPage