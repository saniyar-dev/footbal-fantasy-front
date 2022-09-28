import React, {FC, ReactElement} from "react";
import Row from "@src/atomComponents/Grid/Row";
import ActivePlayerUrl from '@assets/Images/Player/ActivePlayer.svg'
import DefaultPlayerUrl from '@assets/Images/Player/DefaultPlayer.svg'
import SelectedPlayerUrl from '@assets/Images/Player/SelectedPlayer.svg'
import HoveredPlayerUrl from '@assets/Images/Player/HoveredPlayer.svg'
import CloseCircleUrl from '@assets/Icons/Player/CloseCircle.svg'
import Column from "@src/atomComponents/Grid/Column";
import styled from "styled-components";
import { USERPLAYER } from "@src/types";
import useModal from "@src/helpers/useModal";
import { usePlayerLogic } from "@src/atomComponents/Player/Player";

const ActiveImg = () => <img src={ActivePlayerUrl} alt="active player" />
const SelectedImg = () => <img src={SelectedPlayerUrl} alt="selected player" />
const DefaultImg = () => <img src={DefaultPlayerUrl} alt="default player" />
const HoveredImg = styled.img.attrs({
    src: HoveredPlayerUrl,
})`
cursor: pointer;
`

const CloseCircle = () => <img src={CloseCircleUrl} alt="close circle icon" />

const CustomPlayerColumn = styled(Column)`
position: relative;
z-index: 2;
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
z-index: 10;
`

const CreateTeamPlayer: FC<{
    playerInfo: USERPLAYER;
}> = ({playerInfo}): ReactElement => {
    const {status, setHoveredId, setSelectedId} = usePlayerLogic({playerInfo})
    const {addModal} = useModal()

    return (
        <CustomPlayerColumn>
            {
                status === 'Active' ? 
                <PlayerCloseCircle onClick={() => addModal({
                    _tag: "player-delete",
                    playerInfo: playerInfo,
                })} 
                styles={{
                    width: '24px',
                    height: '24px',
                }}>
                    <CloseCircle />
                </PlayerCloseCircle> : undefined
            }
            <Row styles={{
                width: '120px',
                alignItems: 'center',
                justifyContent: 'center'
            }}

            onMouseEnter={(e) => {
                e.preventDefault()
                if (status !== 'Active' && status !== 'Selected') setHoveredId(playerInfo.squad_place)
            }}

            onMouseLeave={(e) => {
                e.preventDefault()
                if (status !== 'Selected') setHoveredId(0)
            }} >
                {
                    status === 'Active' ? 
                    <ActiveImg /> :
                    status === 'Default' ?
                    <DefaultImg /> : 
                    status === 'Hovered' ? 
                    <HoveredImg onClick={() => setSelectedId(playerInfo.squad_place)} /> : 
                    <SelectedImg />
                }
            </Row>
            <Column>
                {
                    status === "Active" ? 
                    <>
                        <PlayerDetailName styles={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>{playerInfo.web_name}</PlayerDetailName> 
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

export default CreateTeamPlayer