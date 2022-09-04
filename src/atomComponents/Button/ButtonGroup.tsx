import React, {FC, ReactElement, useContext, useState} from "react"
import Button from "./Button";
import {Styles} from '../../types/index'


const ButtonGroupContext = React.createContext<{
    styles: Styles;
    selectedId: number;
    onClickFn: (id: number) => void;
}>({
    styles: {
        defaultWidth: 0,
        defaultHeight: 0,
    },
    selectedId: 0,
    onClickFn: (id: number) => {throw new Error("no init value found: ButtonGroupContext")}
})

export const ButtonGroup: FC<{
    styles: Styles;
    onChange: (id: number) => void;
    children: React.ReactNode
    defaultId: number;
}> = ({
    styles,
    children,
    defaultId,
    onChange
}): ReactElement => {
    const [selectedId, setSelectedId] = useState(defaultId)

    return <ButtonGroupContext.Provider value={{styles, selectedId: selectedId, onClickFn: (id) => {
        onChange(id)
        setSelectedId(id)
    }}}>
        {children}
    </ButtonGroupContext.Provider>
}

export const ButtonGroupBtn: FC<{
    id: number;
    children: React.ReactNode
}> = ({id, children}): ReactElement => {
    const {styles, selectedId, onClickFn} = useContext(ButtonGroupContext)
    return <Button styles={styles} active={selectedId === id} onClick={() => onClickFn(id)}>
        {children}
    </Button>
}

export default ButtonGroup