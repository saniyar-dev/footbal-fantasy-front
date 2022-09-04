import React, {FC, ReactElement} from "react"
import styled from "styled-components"
import {Styles} from '../../types/index'

interface ListItemProps {
    name: string;
    position?: string;
    staticNumbers: {
        performance: number;
        price: number;
    }
    styles: Styles;
}

const ListItemContainer = styled.div<{
    styles: Styles;
}>`
    width: ${props => props.styles.defaultWidth + 'px'};
    height: ${props => props.styles.defaultHeight + 'px'};
    background: ${props => props.styles.activeBgColor ? props.styles.activeBgColor : props.styles.defaultBgColor};
    border-bottom: ${props => props.styles.border ? props.styles.border.value : ''};
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

const ListItem: FC<ListItemProps> = ({name, position, staticNumbers, styles}): ReactElement => {
    return (
        <ListItemContainer 
        styles={styles} >
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
