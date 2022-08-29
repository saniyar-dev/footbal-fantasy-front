import React, {FC, ReactElement} from "react"
import styled from "styled-components"

interface ListItemProps {
    name: string;
    position?: string;
    border?: {
        bottem?: string;
    };
    width: number;
    height: number;
    bgColor?: string;
    staticNumbers: {
        performance: number;
        price: number;
    }
}

const ListItemContainer = styled.div<{
    border?: {
        bottem?: string;
    };
    width: number;
    height: number;
    bgColor?: string;
}>`
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    background: ${props => props.bgColor ? props.bgColor : 'white'};
    border-bottom: ${props => props.border?.bottem ? props.border.bottem : '1px solid #EFEFEF'};
    display: flex;
    justify-content: space-between;
`

const Title = styled.span`
    display: flex;
    justify-content: center;
    flex-direction: column;

    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    text-align: right;

    color: #3D195B;
`

const PositionText = styled.div`
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    display: flex;
    align-items: center;
    text-align: right;

    color: rgba(61, 25, 91, 0.36);
`

const Static = styled.span`
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #3D195B;
`

const ListItem: FC<ListItemProps> = ({name, position, staticNumbers, width, height, bgColor, border}): ReactElement => {
    return (
        <ListItemContainer 
            width={width} 
            height={height} 
            bgColor={bgColor ? bgColor : undefined} 
            border={border ? border : undefined}>
            <Title>
                {name}
                {
                    position ? 
                    <PositionText>
                        {position}
                    </PositionText> : ''
                }
            </Title>
            <Static>
                {staticNumbers.performance}
            </Static>
            <Static>
                {staticNumbers.price}
            </Static>
        </ListItemContainer>
    )
}

export default ListItem
