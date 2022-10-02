import Column from "@src/atomComponents/Grid/Column";
import { usePlayerLogic } from "@src/atomComponents/Player/Player";
import { USERPLAYER } from "@src/types";
import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import Row from "@src/atomComponents/Grid/Row";
import useModal from "@src/helpers/useModal";
import { useRecoilState } from "recoil";
import { _selectedPlayer } from "@src/state/players";

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
background: #05F4F1;
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
    const {status, setToSelected} = usePlayerLogic({playerInfo, local: false, clickActive: true})
    const {addModal} = useModal()
    const [selectedPlayer, ] = useRecoilState(_selectedPlayer)

    return <CustomPlayerColumn>
    {
            status === 'Active' ? <Column onClick={() => {
                if (selectedPlayer) {
                    addModal({
                        _tag: 'change-player',
                        playerIn: playerInfo,
                        playerOut: selectedPlayer
                    })
                } else {
                    setToSelected(playerInfo)
                }
            }}>
                <ActiveImg />
                <ActivePlayerDetail>{playerInfo.web_name}</ActivePlayerDetail>
            </ Column> : undefined
    }
    {
        status === 'Selected' ? <Column onClick={() => setToSelected("none")}>
            <ActiveImg />
            <SelectedPlayerDetail>
                {playerInfo.web_name}
            </SelectedPlayerDetail>
        </Column> : undefined
    }
    </CustomPlayerColumn>
}

export default ReservePlayer