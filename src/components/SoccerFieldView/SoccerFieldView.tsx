import React, {FC, ReactElement, ReactNode} from "react";
import styled from "styled-components";
import BackgroundUrl from "@assets/Images/SoccerField.png"
import Column from "@src/atomComponents/Grid/Column";
import { PlayersContainer } from "@src/atomComponents/Player/Player";

const Background = styled.img.attrs({
    src: BackgroundUrl
})`
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
`

const StyledColumn = styled(Column)`
    position: relative;
    justify-content: center;
    width: 100%;
`


const SoccerFieldView: FC<{children: ReactNode}> = ({children}): ReactElement => {
    return (
        <StyledColumn styles={{
            justifyContent: 'center'
        }}>
            <Background />
            <PlayersContainer>
                <Column styles={{
                    gap: '24px',
                }}>
                    {children}
                </Column>
            </PlayersContainer>
        </StyledColumn>
    )
}

export default SoccerFieldView