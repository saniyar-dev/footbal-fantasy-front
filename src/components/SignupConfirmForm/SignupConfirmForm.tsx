import { Form, FormHeader, FormInput, FormPrimaryButton } from "@src/atomComponents/Form/Form";
import React, {FC, ReactElement} from "react";

const SignupConfirmFormComponent : FC = () : ReactElement => {
    return(
        <Form onSubmitFn={(data) => {console.log(data)}} styles={{
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto auto auto',
            width: '571px',
            height: 'fit-content',
            gap: '72px'
        }}>
            <FormHeader>تایید ثبت نام</FormHeader>
            <FormInput id="confirmCode" label="لطفا کدی که برایتان ارسال شده رو در کارد زیر وارد کنید" placeHolder="" />
            <FormPrimaryButton>تایید ثبت نام</FormPrimaryButton>
        </Form>
    )
}
export default SignupConfirmFormComponent