import React, {FC, ReactElement, useState} from "react";
import Row from "../Grid/Row";
import ActivePlayerUrl from '@assets/Images/Player/ActivePlayer.svg'
import DefaultPlayerUrl from '@assets/Images/Player/DefaultPlayer.svg'
import SelectedPlayerUrl from '@assets/Images/Player/SelectedPlayer.svg'
import HoveredPlayerUrl from '@assets/Images/Player/HoveredPlayer.svg'
import CloseCircleUrl from '@assets/Icons/Player/CloseCircle.svg'
import Column from "../Grid/Column";
import styled from "styled-components";
import { PLAYER } from "@src/types";

const ActiveImg = () => <img src={ActivePlayerUrl} alt="active player" />
const SelectedImg = () => <img src={SelectedPlayerUrl} alt="selected player" />
const DefaultImg = () => <img src={DefaultPlayerUrl} alt="default player" />
const HoveredImg = () => <img src={HoveredPlayerUrl} alt="hovered player" />

const CloseCircle = () => <img src={CloseCircleUrl} alt="close circle icon" />

const CustomPlayerColumn = styled(Column)`
position: relative;
`

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

const PlayerCloseCircle = styled(Column)`
position: absolute;
top: 0;
right: 0;
cursor: pointer;
`

type StatusType = "Active" | "Default" | "Selected" | "Hovered"

const Player: FC<{
    status: StatusType;
    playerInfo: PLAYER;
}> = ({status, playerInfo}): ReactElement => {
    const [_status, setStatus] = useState<StatusType>(status)
    return (
        <CustomPlayerColumn>
            {
                _status === 'Active' ? 
                <PlayerCloseCircle onClick={() => console.log('delete player')} 
                styles={{
                    width: '24px',
                    height: '24px',
                }}>
                    <CloseCircle />
                </PlayerCloseCircle> : undefined
            }
            <Row onMouseOver={(e) => {
                e.preventDefault()
                if (_status !== 'Active') setStatus('Hovered')
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
                    _status === 'Hovered' ? 
                    <HoveredImg /> : 
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
        </CustomPlayerColumn>
    )
}

export default Player