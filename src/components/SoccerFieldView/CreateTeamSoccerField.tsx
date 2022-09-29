import Row from "@src/atomComponents/Grid/Row";
import useAppState from "@src/services/useAppState";
// import { squadPlayers } from "@src/state/players";
import { Role } from "@src/types";
import React, {FC, ReactElement} from "react";
// import { useRecoilState } from "recoil";
import CreateTeamPlayer from "../Player/CreateTeamPlayer/CreateTeamPlayer";
import SoccerFieldView from "./SoccerFieldView";

const roleList: Array<Role> = ["GK", "DEF", "MID", "ATT"]

const CreateTeamSoccerField: FC = (): ReactElement => {
    // const [players, ] = useRecoilState(squadPlayers)
    const {squadPlayers} = useAppState()

    return <SoccerFieldView>
        {
            roleList.map(role => {
                return <Row styles={{
                    height: '155px',
                    gap: '56px',
                    justifyContent: 'center'
                }} key={role}>
                    {
                        squadPlayers.filter(player => player.position === role).map((player, index) => {
                            return <CreateTeamPlayer playerInfo={player} key={index} />
                        })
                    }
                </Row>
            })
        }
    </SoccerFieldView>
}

export default CreateTeamSoccerField