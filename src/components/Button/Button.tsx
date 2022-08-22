import styled from "styled-components";

const Button = styled.button<{
    width: number;
    height: number;
    bgColor: string;
    active: boolean;
}>`
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    background: ${props => {
        return props.active ? props.bgColor : 'white'
    }};
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    text-align: center;
    border-radius: 8px;
`

export default Button
