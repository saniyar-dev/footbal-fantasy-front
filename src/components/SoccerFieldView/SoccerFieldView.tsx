import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import BackgroundUrl from "@assets/Images/SoccerField.png"

const Background = styled.img.attrs({
    src: BackgroundUrl
})`
    position: absolute;
    background-size: cover;
`

const SoccerFieldView: FC = (): ReactElement => {
    return (
        <Background />
    )
}

export default SoccerFieldView