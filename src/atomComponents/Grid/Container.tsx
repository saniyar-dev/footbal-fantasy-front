import styled from "styled-components";
import {CSSProperties} from "react";

type Style = Pick<CSSProperties, "gap" | "width" | "height" | "gridTemplateColumns" | "gridTemplateRows">

const Container = styled.div<{
    styles?: Style
}>`
    display: grid;
    width: ${props => props.styles?.width};
    height: ${props => props.styles?.height};
    gap: ${props => props.styles?.gap};
    grid-template-columns: ${props => props.styles?.gridTemplateColumns};
    grid-template-rows: ${props => props.styles?.gridTemplateRows};
    position: relative;
`
export default Container
