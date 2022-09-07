import React, {FC, ReactElement, useState} from "react";
import Row from "../Grid/Row";
import ActivePlayerUrl from '@assets/Images/Player/ActivePlayer.png'
import DefaultPlayerUrl from '@assets/Images/Player/DefaultPlayer.png'
import SelectedPlayerUrl from '@assets/Images/Player/SelectedPlayer.png'
import Column from "../Grid/Column";
import styled from "styled-components";
import { PLAYER } from "@src/types";

const ActiveImg = () => <img src={ActivePlayerUrl} alt="active player" />
const SelectedImg = () => <img src={SelectedPlayerUrl} alt="selected player" />
const DefaultImg = () => <img src={DefaultPlayerUrl} alt="default player" />

const PlayerDetailName = styled(Row)`
background: #37013B;
border-radius: 8px 8px 0px 0px; 

height: 24px;
width: 100%;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 13px;
text-align: center;

color: #FFFFFF;
`

const PlayerDetailScore = styled(Row)`
background: rgba(204, 255, 228, 0.27);
border-radius: 0px 0px 8px 8px;

height: 20px;
width: 100%;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 700;
font-size: 12px;
text-align: center;

color: #38003C;
`

type StatusType = "Active" | "Default" | "Selected"

const Player: FC<{
    status: StatusType;
    playerInfo: PLAYER;
}> = ({status, playerInfo}): ReactElement => {
    const [_status, setStatus] = useState<StatusType>(status)
    return (
        <Column>
            <Row onMouseOver={(e) => {
                e.preventDefault()
                if (_status !== 'Active') setStatus('Selected')
            }}
            onMouseLeave={(e) => {
                e.preventDefault()
                setStatus(status)
            }} styles={{
                width: '120px',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {
                    _status === 'Active' ? 
                    <ActiveImg /> :
                    _status === 'Default' ?
                    <DefaultImg /> : 
                    <SelectedImg />
                }
            </Row>
            <Column>
                {
                    _status === "Active" ? 
                    <>
                        <PlayerDetailName styles={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>{playerInfo.name}</PlayerDetailName> 
                        <PlayerDetailScore styles={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>{playerInfo.score}</PlayerDetailScore>
                    </> : undefined
                }
            </Column>
        </Column>
    )
}

export default Player