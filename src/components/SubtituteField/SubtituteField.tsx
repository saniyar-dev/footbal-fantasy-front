import Column from "@src/atomComponents/Grid/Column";
import SectionHeader from "@src/atomComponents/SectionHeader/SectionHeader";
import useAppState from "@src/services/useAppState";
import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import ReservePlayer from "../Player/ReservePlayer/ReservePlayer";

const StyledColumn = styled(Column)`
width: 100%;
height: 100%;
filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.12));
background: #FFFFFF;
border-radius: 0 0 16px 16px;
`

const SubtituteField: FC = (): ReactElement => {
    const {reservePlayers} = useAppState()
    return <StyledColumn>
        <SectionHeader>
            بازیکنان ذخیره
        </SectionHeader>
        <Column>
            {
                reservePlayers.map((player, index) => {
                    return <ReservePlayer playerInfo={player} key={index} />
                })
            }
        </Column>
    </StyledColumn>
}

export default SubtituteField