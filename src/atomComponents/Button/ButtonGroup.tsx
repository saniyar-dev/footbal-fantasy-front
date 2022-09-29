import React, {FC, ReactElement, useContext, useEffect, useState, CSSProperties} from "react"
import Button from "./Button";

type ButtonStylesType = Pick<CSSProperties, "width" | "height" | "background" | "fontSize" | "fontWeight" | "borderRadius" | "border">

const ButtonGroupContext = React.createContext<{
    styles: ButtonStylesType;
    selectedId: number;
    onClickFn: (id: number) => void;
}>({
    styles: {},
    selectedId: 0,
    onClickFn: (id: number) => {throw new Error("no init value found: ButtonGroupContext")}
})

export const ButtonGroup: FC<{
    styles: ButtonStylesType;
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

    useEffect(() => setSelectedId(defaultId), [defaultId])
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
    return <Button styles={{
        ...styles,
        background: selectedId === id ? styles.background : '',
    }} onClick={() => onClickFn(id)}>
        {children}
    </Button>
}

export default ButtonGroup