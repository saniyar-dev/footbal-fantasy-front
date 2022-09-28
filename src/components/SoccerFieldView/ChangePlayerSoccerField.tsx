import Row from "@src/atomComponents/Grid/Row";
import { myPlayers } from "@src/state/players";
import { Role } from "@src/types";
import React, {FC, ReactElement} from "react";
import { useRecoilState } from "recoil";
import MainPlayer from "../Player/MainPlayer/MainPlayer";
import SoccerFieldView from "./SoccerFieldView";

const roleList: Array<Role> = ["GK", "DEF", "MID", "ATT"]

const ChangePlayerSoccerField: FC = (): ReactElement => {
    const [players, ] = useRecoilState(myPlayers)
    return <SoccerFieldView>
        {
            roleList.map(role => {
                return <Row styles={{
                    height: '155px',
                    gap: '56px',
                    justifyContent: 'center'
                }} key={role}>
                    {
                        players.filter(player => player.position === role).map((player, index) => {
                            return <MainPlayer playerInfo={player} key={index} />
                        })
                    }
                </Row>
            })
        }
    </SoccerFieldView>
}

export default ChangePlayerSoccerField