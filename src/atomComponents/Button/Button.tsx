import { CSSProperties } from "react";
import styled from "styled-components";
// import { Styles } from "../../types/index";

const Button = styled.button<{
    styles?: Pick<CSSProperties, "width" | "height" | "background" | "fontSize" | "fontWeight" | "borderRadius" | "border" | "color">;
}>`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: ${props => props.styles?.width};
height: ${props => props.styles?.height};
background: ${props => props.styles?.background };
font-family: 'Vazirmatn';
font-style: normal;
font-weight: ${props => props.styles?.fontWeight};
font-size: ${props => props.styles?.fontSize};
border-radius: ${props => props.styles?.borderRadius};
border: ${props => props.styles?.border};
color: ${props => props.styles?.color}
`

export default Button
