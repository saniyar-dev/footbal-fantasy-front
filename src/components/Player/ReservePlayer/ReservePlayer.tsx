import Column from "@src/atomComponents/Grid/Column";
import { usePlayerLogic } from "@src/atomComponents/Player/Player";
import { USERPLAYER } from "@src/types";
import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import Row from "@src/atomComponents/Grid/Row";

import ActivePlayerUrl from '@assets/Images/Player/ActivePlayer.svg'

const ActiveImg = () => <img src={ActivePlayerUrl} alt="active player" />

const CustomPlayerColumn = styled(Column)`
  z-index: 2;
`

const ActivePlayerDetail = styled(Row)`
background: #37013B;
border-radius: 4px;
justify-content: center;
align-items: center;

width: 120px;
height: 25px;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 12px;
text-align: center;

color: #FFFFFF;
`

const SelectedPlayerDetail = styled(Row)`
background: #37013B;
border-radius: 4px;
justify-content: center;
align-items: center;

width: 120px;
height: 25px;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 12px;
text-align: center;

color: #FFFFFF;
`

const ReservePlayer: FC<{
    playerInfo: USERPLAYER
}> = ({playerInfo}): ReactElement => {
    const {status, setSelectedId} = usePlayerLogic({playerInfo, local: true, clickActive: true})
    return <CustomPlayerColumn>
    {
            status === 'Active' ? <Column onClick={() => setSelectedId(playerInfo.player_id)}>
                <ActiveImg />
                <ActivePlayerDetail>{playerInfo.web_name}</ActivePlayerDetail>
            </ Column> : undefined
    }
    {
        status === 'Selected' ? <Column>
            <ActiveImg />
            <SelectedPlayerDetail>
                {playerInfo.web_name}
            </SelectedPlayerDetail>
        </Column> : undefined
    }
    </CustomPlayerColumn>
}

export default ReservePlayer