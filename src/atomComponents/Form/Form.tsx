import React, {createContext, FC, ReactElement, ReactNode, useContext, useState} from 'react'
import styled, { CSSProperties } from "styled-components";
import Column from '../Grid/Column';
import Container from '../Grid/Container';
import Row from '../Grid/Row';

const FormContext = createContext<{
    onSubmitFn: () => void,
    setValues: Function,
    values: Object
}>({
    values: {},
    setValues: () => {throw new Error("form doesn't have onSubmitFn function")},
    onSubmitFn: () => {throw new Error("form doesn't have onSubmitFn function")}
})

export const Form: FC<{
    children: ReactNode,
    styles?: Pick<CSSProperties, "gap" | "gridTemplateColumns" | "gridTemplateRows" | "width" | "height">,
    onSubmitFn: () => void,
}> = ({children, styles}): ReactElement => {
    const [values, setValues] = useState({})

    return <FormContext.Provider value={{
        onSubmitFn: () => console.log(),
        setValues: setValues,
        values: values,
    }}>
        <Container styles={styles}>{children}</Container>
    </FormContext.Provider>
}

const RightBar = styled.span`
border: 3px solid #9B3AF9;
`
const LeftBar = styled.span`
border: 3px solid #933087;
`

export const FormHeader: FC<{
    children: ReactNode,
}> = ({children}): ReactElement => {
    return (
        <Row styles={{
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <RightBar />
            <span>
                {children}
            </span>
            <LeftBar />
        </Row>
    )
}

const StyledInput = styled.input`
    box-sizing: border-box;

    background: #3D185B;
    border: 1px solid #A057DB;
    border-radius: 8px;
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
                setValues({...values, id: e.target.value})
            }} />
        </Column>
    )
}

const PrimaryButton = styled.button`
background: linear-gradient(90deg, #CF31B9 0%, #9B3AF9 73.44%);
border-radius: 8px;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 20px;

display: flex;
align-items: center;
justify-content: center;
text-align: center;

color: #FFFFFF;
`

export const FormPrimaryButton: FC<{
    children: ReactNode,
}> = ({children}): ReactElement => {
    return <PrimaryButton>{children}</PrimaryButton>
}

const SecondaryButton = styled.button`
box-sizing: border-box;

background: #3D185B;
border-radius: 8px; 

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 300;
font-size: 20px;

display: flex;
align-items: center;
justify-content: center;
text-align: center;

color: #FFFFFF;

`

export const FormSecondaryButton: FC<{
    children: ReactNode,
}> = ({children}): ReactElement => {
    return <SecondaryButton>{children}</SecondaryButton>
}