import styled from "styled-components";
import {CSSProperties} from "react";

type Style = Pick<CSSProperties, "gap" | "width" | "height">

const Row = styled.div<{
    styles?: Style
}>`
    display: flex;
    width: ${props => props.styles?.width};
    height: ${props => props.styles?.height};
    gap: ${props => props.styles?.gap ? props.styles.gap : ''};
`
export default Row

