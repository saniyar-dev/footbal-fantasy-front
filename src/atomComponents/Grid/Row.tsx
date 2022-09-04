import React, {FC, ReactElement, ReactNode} from "react";
import styled from "styled-components";

const RowStyled = styled.div`
    display: flex;
`

const Row: FC<{
    children: ReactNode,
}> = ({children}): ReactElement => {
    return <RowStyled>{children}</RowStyled>
}

export default Row

