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

const StyledForm = styled(Container)`

`
export const Form: FC<{
    children: ReactNode,
    styles?: Pick<CSSProperties, "gap" | "gridTemplateColumns" | "gridTemplateRows" | "width" | "height">,
    onSubmitFn: () => void,
}> = ({children, styles}): ReactElement => {
    const [values, setValues] = useState({})

    return <FormContext.Provider value={{
        onSubmitFn: () => console.log(),
        setValues: setValues,
        values: {},
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
    const {values, setValues, onSubmitFn} = useContext(FormContext)
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


