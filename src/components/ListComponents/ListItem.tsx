import styled from "styled-components"

const ListItem = styled.div<{
    border?: {
        bottem?: string;
    };
    width: number;
    height: number;
    bgColor?: string;
}>`
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.bgColor ? props.bgColor : 'white'};
    border-bottom: ${props => props.border?.bottem ? props.border.bottem : ''};
`

export default ListItem
