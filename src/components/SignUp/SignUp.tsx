import React, {FC, ReactElement} from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;`

const FormContainer = styled.div`
    desplay: flex;
    justify-content: center;
    align-items: center;`



const RightLine = styled.hr`
    border: 3px solid #933087;
    width: 174px;`

const LeftLine = styled.hr`
    border: 3px solid #9B3AF9;
    width: 174px;`

const Title = styled.h1`
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

const SignUp: FC = () : ReactElement => {
    return(
        <HeaderContainer>
            <LeftLine />
            <Title>فرم ثبت نام</Title>
            <RightLine />
        </HeaderContainer>
    )
}
export default SignUp