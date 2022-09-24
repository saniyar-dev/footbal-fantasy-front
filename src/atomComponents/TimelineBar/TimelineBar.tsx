import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import Row from "@src/atomComponents/Grid/Row";

const StyledRow = styled(Row)`
width: 372px;
height: 35px;

padding: 0 32px 0 32px;

justify-content: space-between;
align-items: center;

background: #3D195B;
border-radius: 8px;
`

const StyledTitle = styled.span`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 800;
font-size: 16px;

text-align: center;

color: #00FF87;
`

const StyledData = styled.span`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 800;
font-size: 14px;
text-align: center;

color: #F7F7F7;
`

const TimelineBar: FC<{
    label: string;
    data: string;
}> = ({label, data}): ReactElement => {
    return <StyledRow>
        <StyledTitle>
            {label}
        </StyledTitle>
        <StyledData>
            {data}
        </StyledData>
    </StyledRow>
}

export default TimelineBar