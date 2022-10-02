import React, {FC, ReactElement, ReactNode} from "react";
import styled from "styled-components";
import Row from "../Grid/Row";

const StyledRow = styled(Row)`
height: 48px;
background: white;
padding: 0 16px 0 24px;
justify-content: start;
align-items: center;
color: #ED1B5D;
border-radius: 8px 8px 0 0;
filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.12))
`

const Toast: FC<{
    children: ReactNode
}> = ({children}): ReactElement => {
    return <StyledRow>
        {children}
    </StyledRow>
}

export default Toast