import React, {createContext, FC, ReactElement, ReactNode} from 'react'
import styled, { CSSProperties } from "styled-components";
import Container from '../Grid/Container';
import Row from '../Grid/Row';

const FormContext = createContext<{
    onSubmitFn: () => void,
    values: Object
}>({
    values: {},
    onSubmitFn: () => {throw new Error("form doesn't have onSubmitFn function")}
})

const StyledForm = styled(Container)`

`
export const Form: FC<{
    children: ReactNode,
    styles?: Pick<CSSProperties, "gap" | "gridTemplateColumns" | "gridTemplateRows" | "width" | "height">,
}> = ({children, styles}): ReactElement => {
    return <StyledForm styles={styles}>{children}</StyledForm>
}

export const FormHeader: FC<{
    children: ReactNode,
}> = (): ReactElement => {
    return (
        <Row>

        </Row>
    )
}