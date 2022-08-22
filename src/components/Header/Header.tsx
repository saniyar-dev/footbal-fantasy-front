import React, {FC, ReactElement} from "react";
import styled from "styled-components";

const Container = styled.div<{
}>`
    background: linear-gradient(269.18deg, #04F3F4 0.06%, #01FC9D 47.08%, #05F4F1 99.26%); 
    border-radius: 0px 0px 16px 16px;
    width: 100%;
    height: 250px;
`

const Header: FC = (): ReactElement => {
    return (
        <Container>
        </Container>
    )
}

export default Header