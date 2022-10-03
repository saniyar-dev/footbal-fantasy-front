import { Form, FormHeader, FormInput, FormPrimaryButton } from "@src/atomComponents/Form/Form";
import useAuth from "@src/services/useAuth";
import React, {FC, ReactElement} from "react";

const SignupConfirmFormComponent : FC = () : ReactElement => {
    const {confirmSignup} = useAuth()
    return(
        <Form onSubmitFn={(data) => confirmSignup(data)} styles={{
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto auto auto',
            width: '571px',
            height: 'fit-content',
            gap: '72px'
        }}>
            <FormHeader>تایید ثبت نام</FormHeader>
            <FormInput styles={{
                background: '#3D185B',
                color: '#EDD8FF',
                border: '1px solid #A057DB',
                }} id="code" label="لطفا کدی که برایتان ارسال شده رو در کارد زیر وارد کنید" placeHolder="" />
            <FormPrimaryButton>تایید ثبت نام</FormPrimaryButton>
        </Form>
    )
}
export default SignupConfirmFormComponent