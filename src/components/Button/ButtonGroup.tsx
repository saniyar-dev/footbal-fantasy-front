import React, {FC, ReactElement} from "react"
import styled from 'styled-components'
import Button from "./Button";
import {ButtonType} from './types'


interface ButtonGroupProps {
    buttonList: Array<ButtonType>;
    defaultWidth: number;
    defaultHeight: number;
    activeBgColor: string;
    defaultBgColor: string;
    activeDefaultId: number;
    defaultFont?: {
        fontSize?: number;
        fontWeight?: number
    };
    defaultBorder?: {
        radius?: number;
        type?: string;
    }
    changeFunction: Function
}

const ButtonGroup: FC<ButtonGroupProps> = ({
    buttonList, 
    activeBgColor, 
    defaultBgColor, 
    defaultHeight, 
    defaultWidth,
    defaultBorder,
    defaultFont,
    changeFunction
}): ReactElement => {
    return (
        <>
        {
            buttonList.map((buttonItem: ButtonType) => 
                <Button 
                active={buttonItem.active} 
                bgColor={buttonItem.active ? activeBgColor : defaultBgColor}
                width={defaultWidth}
                height={defaultHeight}
                font={defaultFont}
                border={defaultBorder}
                onClick={(e) => {
                    e.preventDefault();
                    const newList = buttonList.map((item: ButtonType): ButtonType => 
                        (item.id === buttonItem.id) ?
                        {
                            id: item.id,
                            title: item.title,
                            active: true,
                        } : {
                            id: item.id,
                            title: item.title,
                            active: false
                        }
                    )
                    changeFunction(newList)
                }}
                >
                    {buttonItem.title}
                </Button>
            )
        }
        </>
    )
}

export default ButtonGroup