import React, {Dispatch, FC, ReactElement, SetStateAction} from "react";
import { Form, FormHeader, FormInput, FormPrimaryButton, FormSecondaryButton } from "@src/atomComponents/Form/Form";
import Column from "@src/atomComponents/Grid/Column";
import Row from "@src/atomComponents/Grid/Row";
import useAuth from "@src/helpers/useAuth";

type FormStatusType = "login" | "signup" | "confirm"

const LoginFormComponent: FC<{
    setStatus: Dispatch<SetStateAction<FormStatusType>>,
}> = ({setStatus}) : ReactElement => {
    const {Login} = useAuth()

    return(
    <Form onSubmitFn={(data) => {Login(data as {username: string; password: string;})}} styles={{
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
            <FormSecondaryButton onClickFn={() => {setStatus("signup")}}>ثبت نام</FormSecondaryButton>
        </Row>
    </Form>
    )
}
export default LoginFormComponent 