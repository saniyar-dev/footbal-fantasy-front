import React, {FC, ReactElement, createContext, ReactNode, useState, useContext, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import { useRecoilState } from "recoil";
import { _selectedPlayer, _selectedSquadId } from "@src/state/players";
import { USERPLAYER } from '@src/types';

export const PlayersContext = createContext<{
    selectedId: number;
    setToSelected: (player: USERPLAYER | "none") => void;
    setHoveredId: React.Dispatch<React.SetStateAction<number>>;
    hoveredId: number;
    localSelectedId: number;
    setToSelectedLocal: (player: USERPLAYER | "none") => void;
}>({
    hoveredId: 0,
    selectedId: 0,
    setToSelected: () => {throw new Error('')},
    setHoveredId: () => {throw new Error('')},
    setToSelectedLocal: () => {throw new Error('')},
    localSelectedId: 0,
})

const PlayersBackground = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
`

export const PlayersContainer: FC<{
    children: ReactNode
}> = ({children}): ReactElement => {
    const [selectedId, setSelectedId] = useRecoilState(_selectedSquadId)
    const [localSelectedId, setLocalSelectedId] = useState(0)
    const [hoveredId, setHoveredId] = useState(0)
    const [, setSelectedPlayer] = useRecoilState(_selectedPlayer)

    const setToSelected = useCallback((player: USERPLAYER | "none") => {
        if (player === "none") {
            setSelectedId(0);
            setSelectedPlayer(undefined)
            return;
        }
        setSelectedId(player.squad_place)
        setSelectedPlayer(player)
    }, [setSelectedId, setSelectedPlayer])

    const setToSelectedLocal = useCallback((player: USERPLAYER | "none") => {
        if (player === "none") {
            setLocalSelectedId(0);
            setSelectedPlayer(undefined)
            return;
        }
        setLocalSelectedId(player.squad_place)
        setSelectedPlayer(player)
    }, [setSelectedPlayer])

    useEffect(() => {
        setToSelected("none")
        setToSelectedLocal("none")
    }, [setToSelected, setToSelectedLocal])
    return <PlayersContext.Provider value={{selectedId, hoveredId, setToSelected, setHoveredId, localSelectedId, setToSelectedLocal }}>
        <PlayersBackground onClick={() => {setToSelected("none"); setHoveredId(0); setToSelectedLocal("none")}}/>
        {children}
    </PlayersContext.Provider>
}

type StatusType = "Active" | "Default" | "Selected" | "Hovered"

const formatContext = ({selectedId, setToSelected, hoveredId, setHoveredId, localSelectedId, setToSelectedLocal, local} :{
    selectedId: number;
    setToSelected: (player: USERPLAYER | "none") => void;
    setHoveredId: React.Dispatch<React.SetStateAction<number>>;
    hoveredId: number;
    localSelectedId: number;
    setToSelectedLocal: (player: USERPLAYER | "none") => void;
    local: boolean;
}): {
    selectedId: number;
    setToSelected: (player: USERPLAYER | "none") => void;
    setHoveredId: React.Dispatch<React.SetStateAction<number>>;
    hoveredId: number;
} => {
    if (local) {
        return {
            selectedId: localSelectedId,
            setToSelected: setToSelectedLocal,
            hoveredId,
            setHoveredId,
        }
    } else {
        return {
            selectedId,
            setToSelected,
            hoveredId,
            setHoveredId,
        }
    }
}

export const usePlayerLogic = ({playerInfo, clickActive, local} :{
    playerInfo: USERPLAYER, clickActive?: boolean, local?: boolean
}):{
    status: StatusType;
    setToSelected: (player: USERPLAYER | "none") => void;
    setHoveredId: React.Dispatch<React.SetStateAction<number>>;
} => {
    const {hoveredId, selectedId, setToSelected, setHoveredId} = formatContext({
        ...useContext(PlayersContext),
        local: local ? local : false
    })
    const [status, setStatus] = useState<StatusType>('Default')

    useEffect(() => {
        if (!clickActive) {
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
            if (playerInfo.player_id !== -1) setStatus('Active')
        } else {
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
            if (playerInfo.player_id !== -1 && playerInfo.squad_place !== selectedId) setStatus('Active')
        }
    }, [hoveredId, selectedId, playerInfo, clickActive])

    return {
        status,
        setHoveredId,
        setToSelected,
    }
}
