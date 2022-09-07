import React, {FC, ReactElement, useState} from "react";
import Row from "../Grid/Row";
import ActivePlayerUrl from '@assets/Images/Player/ActivePlayer.png'
import DefaultPlayerUrl from '@assets/Images/Player/DefaultPlayer.png'
import SelectedPlayerUrl from '@assets/Images/Player/SelectedPlayer.png'
import Column from "../Grid/Column";
import styled from "styled-components";

const ActiveImg = () => <img src={ActivePlayerUrl} alt="active player" />
const SelectedImg = () => <img src={SelectedPlayerUrl} alt="selected player" />
const DefaultImg = () => <img src={DefaultPlayerUrl} alt="default player" />

type StatusType = "Active" | "Default" | "Selected"

const Player: FC<{
    status: StatusType;
}> = ({status}): ReactElement => {
    const [_status, setStatus] = useState<StatusType>(status)
    return (
        <Column>
            <Row onMouseOver={(e) => {
                e.preventDefault()
                setStatus('Selected')
            }}
            onMouseLeave={(e) => {
                e.preventDefault()
                setStatus(status)
            }} styles={{
                width: '120px',
            }}>
                {
                    _status === 'Active' ? 
                    <ActiveImg /> :
                    _status === 'Default' ?
                    <DefaultImg /> : 
                    <SelectedImg />
                }
            </Row>
            <Row>
                {
                    
                }
            </Row>
        </Column>
    )
}

export default Player