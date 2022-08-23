import styled from "styled-components";

const Button = styled.button<{
    width: number;
    height: number;
    bgColor: string;
    active: boolean;
    font?: {
        fontSize?: number;
        fontWeight?: number
    };
    border?: {
        radius?: number;
        type?: string;
    }
}>`
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    background: ${props => props.active ? props.bgColor : 'white'};
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: ${props => props.font?.fontSize ? props.font.fontWeight : 900};
    font-size: ${props => props.font?.fontSize ? props.font.fontSize + 'px' : '17px'};
    text-align: center;
    border-radius: ${props => props.border?.radius ? props.border.radius : '8px'};
    border: ${props => props.border?.type ? props.border.type : ''}
`

export default Button
