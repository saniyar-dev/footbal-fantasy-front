import React, {FC, ReactElement} from "react";
import styled from "styled-components";
//import Container from "@src/atomComponents/Grid/Container";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;`

const RightLine = styled.hr`
    border: 3px solid #933087;
    width: 174px;`

const LeftLine = styled.hr`
    border: 3px solid #9B3AF9;
    width: 174px;`

const HeaderTitle = styled.h1`
    width: 175px;
    height: 60px;
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
`
const FieldTitle = styled.h1`
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #EDD8FF;
`
const InputBox = styled.input`
    box-sizing: border-box;
    width: 571px;
    height: 48px;

    background: #3D185B;
    border: 1px solid #A057DB;
    border-radius: 8px;`


const ConfirmationBtn = styled.button`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 571px;
    height: 48px;

    box-sizing: border-box;
    background: linear-gradient(90deg, #CF31B9 0%, #9B3AF9 73.44%);
    border-radius: 8px;`



const SignUpCodeConfirmation: FC = () : ReactElement => {
    return(
        <Container>
            <HeaderContainer>
                <LeftLine />
                <HeaderTitle>تایید ثبت نام</HeaderTitle>
                <RightLine />
            </HeaderContainer>
            <FieldTitle>
                لطفا کدی که به ایمیلتان ارسال شده را در کادر زیر وارد کنید 
            </FieldTitle>
            <InputBox />
            <ConfirmationBtn><FieldTitle>تایید ثبت نام</FieldTitle></ConfirmationBtn>
        </Container>
    )
}
export default SignUpCodeConfirmation