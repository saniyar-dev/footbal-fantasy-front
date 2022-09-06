import styled from "styled-components";
import {CSSProperties} from "react";

type Style = Pick<CSSProperties, "gap" | "width" | "height" | "justifyContent" | "alignItems">

const Row = styled.div<{
    styles?: Style
}>`
    display: flex;
    width: ${props => props.styles?.width};
    height: ${props => props.styles?.height};
    gap: ${props => props.styles?.gap};
    align-items: ${props => props.styles?.alignItems};
    justify-content: ${props => props.styles?.justifyContent};
`
export default Row

