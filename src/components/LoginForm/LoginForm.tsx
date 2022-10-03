import React, {FC, ReactElement} from "react";
import { Form, FormHeader, FormInput, FormPrimaryButton, FormSecondaryButton } from "@src/atomComponents/Form/Form";
import Column from "@src/atomComponents/Grid/Column";
import Row from "@src/atomComponents/Grid/Row";
import useAuth from "@src/services/useAuth";
import { useNavigate } from "react-router-dom";

const LoginFormComponent: FC = () : ReactElement => {
    const {Login} = useAuth()
    const navigate = useNavigate()

    return(
    <Form onSubmitFn={(data) => Login(data)} styles={{
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
            <FormInput styles={{
                background: '#3D185B',
                color: '#EDD8FF',
                border: '1px solid #A057DB',
            }} id="username" label="نام کاربری" placeHolder="asghar" errMessage="از گوگل ترنسلیت استفاده کن و اینو خارجکی بده" />
            <FormInput  styles={{
                background: '#3D185B',
                color: '#EDD8FF',
                border: '1px solid #A057DB',
            }} id="password" label="رمز عبور" placeHolder="" errMessage="رمز عبورت باید حداقل ۸ حرف باشه و توش یه عددم داشته باشه" />
        </Column>
        <Row styles={{
            gap: '24px'
        }}>
            <FormPrimaryButton>ورود</FormPrimaryButton>
            <FormSecondaryButton onClickFn={() => {navigate("/user/signup")}}>ثبت نام</FormSecondaryButton>
        </Row>
    </Form>
    )
}
export default LoginFormComponent 