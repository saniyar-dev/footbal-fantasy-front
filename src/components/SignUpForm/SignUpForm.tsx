import React, {FC, ReactElement} from "react";
import { Form, FormHeader, FormInput, FormPrimaryButton } from "@src/atomComponents/Form/Form";
import Container from "@src/atomComponents/Grid/Container";


const SignupFormComponent: FC = () : ReactElement => {
    return(
        <Form onSubmitFn={(data) => console.log(data)} styles={{
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto auto auto',
            gap: '48px',
            width: '571px',
            height: 'fit-content',
        }}>
            <FormHeader>
                فرم ثبت نام
            </FormHeader>
            <Container styles={{
                gridTemplateColumns: 'auto auto',
                gridTemplateRows: 'auto auto auto',
                gap: '24px',
            }}>

                <FormInput id="name" label="نام" placeHolder="مثلا محمود" />
                <FormInput id="lastname" label="نام خانوادگی" placeHolder="مثلا محمودی" />
                <FormInput id="email" label="ایمیل" placeHolder="mahmood@gmail.com" />
                <FormInput id="country" label="کشور" placeHolder="ایران" />
                <FormInput id="username" label="نام کاربری" placeHolder="mahmoodMahmoodi" />
                <FormInput id="password" label="رمز عبور" placeHolder="" />
            </Container>
            <FormPrimaryButton>ثبت نام</FormPrimaryButton>
        </Form>
    )
}
export default SignupFormComponent