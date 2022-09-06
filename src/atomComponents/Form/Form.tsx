import React, {createContext, FC, ReactElement, ReactNode} from 'react'
import styled from "styled-components";

const FormContext = createContext<{
    onSubmitFn: () => void,
    values: Object
}>({
    values: {},
    onSubmitFn: () => {throw new Error("form doesn't have onSubmitFn function")}
})

export const Form: FC<{
    children: ReactNode
}> = ({children}): ReactElement => {
    return <div>{children}</div>
}