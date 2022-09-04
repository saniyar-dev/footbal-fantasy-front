import React, {FC, ReactElement, ReactNode} from "react";
import styled from "styled-components";

const ColumnStyled = styled.div`
    display: flex;
    flex-direction: column;
`

const Column: FC<{
    children: ReactNode,
}> = ({children}): ReactElement => {
    return <ColumnStyled>{children}</ColumnStyled>
}

export default Column
