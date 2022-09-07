import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import ActivePlayerUrl from '@assets/Images/Player/ActivePlayer.png'
import DefaultPlayerUrl from '@assets/Images/Player/DefaultPlayer.png'
import SelectedPlayerUrl from '@assets/Images/Player/SelectedPlayer.png'
import Column from "../Grid/Column";

const PlayerImage = styled.img<{
    src: string;
}>`

`

const Player: FC<{
    active: boolean;
}> = ({active}): ReactElement => {
    return (
        <Column>
            <PlayerImage src={active ? ActivePlayerUrl : DefaultPlayerUrl} />
        </Column>
    )
}

export default Player