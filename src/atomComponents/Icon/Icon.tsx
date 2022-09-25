import { CSSProperties } from "react";
import styled from "styled-components";

const Icon = styled.img<{
    width?: Pick<CSSProperties, "width">,
    height?: Pick<CSSProperties, 'height'>,
}>`
width: ${props => props.width};
height: ${props => props.height};
`

export default Icon