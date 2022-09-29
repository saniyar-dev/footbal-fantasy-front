import Row from "@src/atomComponents/Grid/Row";
import useAppState from "@src/services/useAppState";
import { Role } from "@src/types";
import React, {FC, ReactElement} from "react";
import MainPlayer from "../Player/MainPlayer/MainPlayer";
import SoccerFieldView from "./SoccerFieldView";

const roleList: Array<Role> = ["GK", "DEF", "MID", "ATT"]

const ChangePlayerSoccerField: FC = (): ReactElement => {
    const {mainPlayers} = useAppState()
    return <SoccerFieldView>
        {
            roleList.map(role => {
                return <Row styles={{
                    height: '155px',
                    gap: '56px',
                    justifyContent: 'center'
                }} key={role}>
                    {
                        mainPlayers.filter(player => player.position === role).map((player, index) => {
                            return <MainPlayer playerInfo={player} key={index} />
                        })
                    }
                </Row>
            })
        }
    </SoccerFieldView>
}

export default ChangePlayerSoccerField