import { CSSProperties } from "react";
import styled from "styled-components";

const Icon = styled.img<{
    width?: Pick<CSSProperties, "width">,
    height?: Pick<CSSProperties, 'height'>,
    cursor?: string;
}>`
width: ${props => props.width};
height: ${props => props.height};
cursor: ${props => props.cursor}
`

export default Icon