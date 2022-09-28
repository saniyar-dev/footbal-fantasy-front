import Column from "@src/atomComponents/Grid/Column";
import SectionHeader from "@src/atomComponents/SectionHeader/SectionHeader";
import React, {FC, ReactElement} from "react";
import styled from "styled-components";

const StyledColumn = styled(Column)`
width: 100%;
height: 100%;
filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.12));
background: #FFFFFF;
border-radius: 0 0 16px 16px;
`

const SubtituteField: FC = (): ReactElement => {
    return <StyledColumn>
        <SectionHeader>
            بازیکنان ذخیره
        </SectionHeader>
        <Column>

        </Column>
    </StyledColumn>
}

export default SubtituteField