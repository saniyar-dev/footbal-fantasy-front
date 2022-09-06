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

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
`

const RowContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`
const FieldContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap:10px;
`
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

    width: 273px;
    height: 48px;

    background: #3D185B;
    border: 1px solid #A057DB;
    border-radius: 8px;`

const SelectBox = styled.select`
    box-sizing: border-box;

    width: 274px;
    height: 48px;

    background: #3D185B;
    border: 1px solid #A057DB;
    border-radius: 8px;`

const SignUpBtn = styled.button`
    display: flex;
    justify-content:center;
    align-items: center;
    width: 571px;
    height: 48px;

    background: linear-gradient(90deg, #CF31B9 0%, #9B3AF9 73.44%);
    border-radius: 8px;`



const SignUp: FC = () : ReactElement => {
    return(
        <Container>
            <HeaderContainer>
                <LeftLine />
                <HeaderTitle>فرم ثبت نام</HeaderTitle>
                <RightLine />
            </HeaderContainer>
                <FormContainer>
                    <RowContainer>
                        <FieldContainer>
                            <FieldTitle>
                                نام
                            </FieldTitle>
                            <InputBox />
                        </FieldContainer>
                        <FieldContainer>
                            <FieldTitle>
                                نام خانوادگی
                            </FieldTitle>
                            <InputBox />
                        </FieldContainer>
                    </RowContainer>
                    <RowContainer>
                        <FieldContainer>
                            <FieldTitle>
                                ایمیل
                            </FieldTitle>
                            <InputBox type="email" />
                        </FieldContainer>
                        <FieldContainer>
                            <FieldTitle>
                                کشور
                            </FieldTitle>
                            <SelectBox />
                        </FieldContainer>
                    </RowContainer>
                    <RowContainer>
                        <FieldContainer>
                            <FieldTitle>
                                نام کاربری
                            </FieldTitle>
                            <InputBox />
                        </FieldContainer>
                        <FieldContainer>
                            <FieldTitle>
                                رمز عبور
                            </FieldTitle>
                            <InputBox type= "password"/>
                        </FieldContainer>
                    </RowContainer>
                </FormContainer>
                <SignUpBtn><FieldTitle>ثبت نام</FieldTitle></SignUpBtn>
        </Container>
    )
}
export default SignUp