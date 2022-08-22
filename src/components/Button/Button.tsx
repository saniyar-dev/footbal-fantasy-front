import React, {FC, ReactElement} from "react";
import './styles.css'

interface ButtonProps {
    buttonWidth: number;
    buttonHeight: number;
    text: string;
}

const Button: FC<ButtonProps> = ({buttonHeight, buttonWidth, text}): ReactElement => {
    return (
        <button style={{
            width: buttonWidth,
            height: buttonHeight
        }}>
            {text}
        </button>
    )
}

export default Button
