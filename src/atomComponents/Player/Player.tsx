import React, {createContext, FC, ReactElement, ReactNode, useContext, useEffect, useState} from "react";
import Row from "../Grid/Row";
import ActivePlayerUrl from '@assets/Images/Player/ActivePlayer.svg'
import DefaultPlayerUrl from '@assets/Images/Player/DefaultPlayer.svg'
import SelectedPlayerUrl from '@assets/Images/Player/SelectedPlayer.svg'
import HoveredPlayerUrl from '@assets/Images/Player/HoveredPlayer.svg'
import CloseCircleUrl from '@assets/Icons/Player/CloseCircle.svg'
import Column from "../Grid/Column";
import styled from "styled-components";
import { USERPLAYER } from "@src/types";
import useModal from "@src/helpers/useModal";
import { useRecoilState } from "recoil";
import { selectedSquadId } from "@src/state/players";

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
`

type StatusType = "Active" | "Default" | "Selected" | "Hovered"

const PlayersContext = createContext<{
    selectedId: number;
    setSelectedId: React.Dispatch<React.SetStateAction<number>>;
    setHoveredId: React.Dispatch<React.SetStateAction<number>>;
    hoveredId: number;
}>({
    hoveredId: 0,
    selectedId: 0,
    setSelectedId: () => {throw new Error('')},
    setHoveredId: () => {throw new Error('')},
})

const PlayersBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1;
`

export const PlayersContainer: FC<{
    children: ReactNode
}> = ({children}): ReactElement => {
    const [selectedId, setSelectedId] = useRecoilState(selectedSquadId)
    const [hoveredId, setHoveredId] = useState(0)
    return <PlayersContext.Provider value={{selectedId, hoveredId, setSelectedId, setHoveredId}}>
        <PlayersBackground onClick={() => {setSelectedId(0); setHoveredId(0);}}/>
        {children}
    </PlayersContext.Provider>
}

export const Player: FC<{
    playerInfo: USERPLAYER;
}> = ({playerInfo}): ReactElement => {
    const {hoveredId, selectedId, setSelectedId, setHoveredId} = useContext(PlayersContext)
    const [_status, setStatus] = useState<StatusType>()
    const {addModal} = useModal()

    useEffect(() => {
        switch (playerInfo.squad_place) {
            case selectedId:
                setStatus('Selected')
                break;
            case hoveredId:
                setStatus('Hovered')
                break;
            default:
                setStatus('Default')
        }

        if (playerInfo.player_id !== -1) {
            setStatus('Active')
        }
    }, [hoveredId, selectedId, playerInfo])
    return (
        <CustomPlayerColumn>
            {
                _status === 'Active' ? 
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
                if (_status !== 'Active' && _status !== 'Selected') setHoveredId(playerInfo.squad_place)
            }}

            onMouseLeave={(e) => {
                e.preventDefault()
                if (_status !== 'Selected') setHoveredId(0)
            }} >
                {
                    _status === 'Active' ? 
                    <ActiveImg /> :
                    _status === 'Default' ?
                    <DefaultImg /> : 
                    _status === 'Hovered' ? 
                    <HoveredImg onClick={() => setSelectedId(playerInfo.squad_place)} /> : 
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
