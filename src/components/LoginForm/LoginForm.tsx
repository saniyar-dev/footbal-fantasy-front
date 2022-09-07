import React, {FC, ReactElement} from "react";
import { Form, FormHeader, FormInput, FormPrimaryButton, FormSecondaryButton } from "@src/atomComponents/Form/Form";
import Column from "@src/atomComponents/Grid/Column";
import Row from "@src/atomComponents/Grid/Row";

const LoginFormComponent: FC = () : ReactElement => {
    return(
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
    )
}
export default LoginFormComponent 