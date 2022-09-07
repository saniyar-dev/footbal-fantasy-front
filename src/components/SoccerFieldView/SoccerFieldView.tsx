import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import BackgroundUrl from "@assets/Images/SoccerField.png"
import Column from "@src/atomComponents/Grid/Column";
import Row from "@src/atomComponents/Grid/Row";
import { Role } from "@src/types";
import { useRecoilState } from "recoil";
import myPlayers from "@src/state/players";
import Player from "@src/atomComponents/Player/Player";

const Background = styled.img.attrs({
    src: BackgroundUrl
})`
    position: absolute;
    background-size: cover;
    width: 100%;
    z-index: -1;
`

const roleList: Array<Role> = ["GK", "DEF", "MID", "ATT"]

const SoccerFieldView: FC = (): ReactElement => {
    const [players, ] = useRecoilState(myPlayers)
    return (
        <Column styles={{
            justifyContent: 'center'
        }}>
            <Background />
            <Column styles={{
                gap: '24px',
            }}>
                {
                    roleList.map(role => {
                        return <Row styles={{
                            height: '155px',
                            gap: '56px',
                            justifyContent: 'center'
                        }}>
                            {
                                players.filter(player => player.role === role).map(player => {
                                    return <Player status="Active" />
                                })
                            }
                        </Row>
                    })
                }
            </Column>
        </Column>
    )
}

export default SoccerFieldView