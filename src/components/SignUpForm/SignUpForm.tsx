import React, {FC, ReactElement} from "react";
import { Form, FormHeader, FormInput, FormPrimaryButton } from "@src/atomComponents/Form/Form";
import Container from "@src/atomComponents/Grid/Container";
import useAuth from "@src/services/useAuth";


const SignupFormComponent: FC = () : ReactElement => {
    const {Signup} = useAuth()
    return(
        <Form onSubmitFn={(data) => Signup(data)} styles={{
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

                <FormInput id="name" label="نام" placeHolder="مثلا محمود" errMessage="اینجا ایرانه ولی تو اسمتو خارجکی تایپ کن" />
                <FormInput id="lastname" label="نام خانوادگی" placeHolder="مثلا محمودی" errMessage="اینم خارجکی لطف کن" />
                <FormInput id="email" label="ایمیل" placeHolder="mahmood@gmail.com" errMessage="این قراره کار کنه یه واقعیشو بده" />
                <FormInput id="country" label="کشور" placeHolder="قم" />
                <FormInput id="username" label="نام کاربری" placeHolder="mahmoodMahmoodi" errMessage="اینجا همه چی خارجکیه" />
                <FormInput id="password" label="رمز عبور" placeHolder="" errMessage="رمز عبورت باید حداقل ۸ حرف و یه عدد توش باشه و البته که خارجکی" />
            </Container>
            <FormPrimaryButton >ثبت نام</FormPrimaryButton>
        </Form>
    )
}
export default SignupFormComponent