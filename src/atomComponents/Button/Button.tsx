import styled from "styled-components";
import { Styles } from "./types";

const Button = styled.button<{
    styles: Styles;
    active: boolean
}>`
    width: ${props => props.styles.defaultWidth + 'px'};
    height: ${props => props.styles.defaultHeight + 'px'};
    background: ${props => props.active ? props.styles.activeBgColor : props.styles.defaultBgColor};
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: ${props => props.styles.font?.fontWeight ? props.styles.font.fontWeight : 900};
    font-size: ${props => props.styles.font?.fontSize ? props.styles.font.fontSize + 'px' : '17px'};
    text-align: center;
    border-radius: ${props => props.styles.border?.radius ? props.styles.border.radius + 'px' : '8px'};
    border: ${props => props.styles.border?.value ? props.styles.border.value : ''};
`

export default Button
