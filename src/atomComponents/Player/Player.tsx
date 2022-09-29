import React, {FC, ReactElement, createContext, ReactNode, useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import { useRecoilState } from "recoil";
import { selectedSquadId } from "@src/state/players";
import { USERPLAYER } from '@src/types';

export const PlayersContext = createContext<{
    selectedId: number;
    setSelectedId: React.Dispatch<React.SetStateAction<number>>;
    setHoveredId: React.Dispatch<React.SetStateAction<number>>;
    hoveredId: number;
    localSelectedId: number;
    setLocalSelectedId: React.Dispatch<React.SetStateAction<number>>;
}>({
    hoveredId: 0,
    selectedId: 0,
    setSelectedId: () => {throw new Error('')},
    setHoveredId: () => {throw new Error('')},
    setLocalSelectedId: () => {throw new Error('')},
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
    const [selectedId, setSelectedId] = useRecoilState(selectedSquadId)
    const [localSelectedId, setLocalSelectedId] = useState(0)
    const [hoveredId, setHoveredId] = useState(0)
    useEffect(() => {
        setSelectedId(0)
    }, [])
    return <PlayersContext.Provider value={{selectedId, hoveredId, setSelectedId, setHoveredId, localSelectedId, setLocalSelectedId}}>
        <PlayersBackground onClick={() => {setSelectedId(0); setHoveredId(0);}}/>
        {children}
    </PlayersContext.Provider>
}

type StatusType = "Active" | "Default" | "Selected" | "Hovered"

const formatContext = ({selectedId, setSelectedId, hoveredId, setHoveredId, localSelectedId, setLocalSelectedId, local} :{
    selectedId: number;
    setSelectedId: React.Dispatch<React.SetStateAction<number>>;
    setHoveredId: React.Dispatch<React.SetStateAction<number>>;
    hoveredId: number;
    localSelectedId: number;
    setLocalSelectedId: React.Dispatch<React.SetStateAction<number>>;
    local: boolean;
}): {
    selectedId: number;
    setSelectedId: React.Dispatch<React.SetStateAction<number>>;
    setHoveredId: React.Dispatch<React.SetStateAction<number>>;
    hoveredId: number;
} => {
    if (local) {
        return {
            selectedId: localSelectedId,
            setSelectedId: setLocalSelectedId,
            hoveredId,
            setHoveredId,
        }
    } else {
        return {
            selectedId,
            setSelectedId,
            hoveredId,
            setHoveredId,
        }
    }
}

export const usePlayerLogic = ({playerInfo, clickActive, local} :{
    playerInfo: USERPLAYER, clickActive?: boolean, local?: boolean
}):{
    status: StatusType;
    setSelectedId: React.Dispatch<React.SetStateAction<number>>;
    setHoveredId: React.Dispatch<React.SetStateAction<number>>;
} => {
    const {hoveredId, selectedId, setSelectedId, setHoveredId} = formatContext({
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
        setSelectedId,
        setHoveredId
    }
}
