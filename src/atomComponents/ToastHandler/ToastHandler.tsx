import useToast from "@src/helpers/useToast";
import React, {FC, ReactElement, useEffect} from "react";
import styled from "styled-components";
import Column from "../Grid/Column";
import Toast from "../Toast/Toast";

const CustomContainer = styled(Column)`
    justify-content: end;
    align-items: start;
    padding: 0 32px 24px 0;
    position: fixed;
    z-index: 110;
    top: 0;
    width: 100%;
    height: 100%;
`


const ToastHandler: FC = (): ReactElement => {
    const {toasts, removeLastToast} = useToast()
    useEffect(() => {
        const intervalId = setInterval(() => {
            removeLastToast()
        }, 3000)

        return () => {
            clearInterval(intervalId)
        }
    }, [toasts])
    return (
        <>
        {
            toasts.length > 0 && 
            <CustomContainer>
                {
                    toasts.map(toast => <Toast>
                        {toast.message}
                    </Toast>)
                }
            </CustomContainer>
        }
        </>
    )
}

export default ToastHandler