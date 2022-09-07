import React, {createContext, FC, ReactElement, ReactNode, useContext, useState} from 'react'
import styled, { CSSProperties } from "styled-components";
import Column from '../Grid/Column';
import Container from '../Grid/Container';
import Row from '../Grid/Row';

const FormContext = createContext<{
    onSubmitFn: (data: Object) => void,
    setValues: Function,
    values: Object
}>({
    values: {},
    setValues: () => {throw new Error("form doesn't have onSubmitFn function")},
    onSubmitFn: (data) => {throw new Error("form doesn't have onSubmitFn function")}
})

export const Form: FC<{
    children: ReactNode,
    styles?: Pick<CSSProperties, "gap" | "gridTemplateColumns" | "gridTemplateRows" | "width" | "height">,
    onSubmitFn: (data: Object) => void,
}> = ({children, styles, onSubmitFn}): ReactElement => {
    const [values, setValues] = useState({})

    return <FormContext.Provider value={{
        onSubmitFn: onSubmitFn,
        setValues: setValues,
        values: values,
    }}>
        <Container styles={styles}>{children}</Container>
    </FormContext.Provider>
}

const RightBar = styled.div`
border: 3px solid #9B3AF9;
flex-grow: 1;
`
const LeftBar = styled.div`
border: 3px solid #933087;
flex-grow: 1;
`

const HeaderTitle = styled.div`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 400;
font-size: 24px;
text-align: center;

color: #FFFFFF;   
`

export const FormHeader: FC<{
    children: ReactNode,
}> = ({children}): ReactElement => {
    return (
        <Row styles={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
        }}>
            <RightBar />
            <HeaderTitle>
                {children}
            </HeaderTitle>
            <LeftBar />
        </Row>
    )
}

const StyledInput = styled.input`
    box-sizing: border-box;
    padding-right: 16px;
    height: 48px;

    background: #3D185B;
    border: 1px solid #A057DB;
    border-radius: 8px;

    color: #EDD8FF;
`

const StyledLabel = styled.div`
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    text-align: right;

    color: #EDD8FF;
`

export const FormInput: FC<{
    id: string;
    label: string,
    placeHolder: string,
}> = ({label, placeHolder, id}): ReactElement => {
    const {values, setValues} = useContext(FormContext)
    return (
        <Column styles={{justifyContent: 'center', gap: '16px'}}>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput placeholder={placeHolder} onChange={(e) => {
                e.preventDefault()
                setValues({...values, [id]: e.target.value})
            }} />
        </Column>
    )
}

const PrimaryButton = styled.button`
background: linear-gradient(90deg, #CF31B9 0%, #9B3AF9 73.44%);
border-radius: 8px;
height: 48px;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 20px;

display: flex;
align-items: center;
justify-content: center;
flex-grow: 1;
text-align: center;

color: #FFFFFF;
`

export const FormPrimaryButton: FC<{
    children: ReactNode,
}> = ({children}): ReactElement => {
    const {values, onSubmitFn} = useContext(FormContext)
    return <PrimaryButton onClick={() => {
        onSubmitFn(values)
    }}>{children}</PrimaryButton>
}

const SecondaryButton = styled.button`
box-sizing: border-box;
height: 48px;

background: linear-gradient(#3D185B, #3D185B) padding-box,
linear-gradient(90deg, #C847AF 1.65%, #9B3AF9 43.98%) border-box;
border-radius: 8px;
border: 2px solid transparent;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 300;
font-size: 20px;

display: flex;
align-items: center;
justify-content: center;
flex-grow: 1;
text-align: center;

color: #FFFFFF;
`

export const FormSecondaryButton: FC<{
    children: ReactNode,
    onClickFn: () => void,
}> = ({children, onClickFn}): ReactElement => {
    return <SecondaryButton onClick={onClickFn}>{children}</SecondaryButton>
}