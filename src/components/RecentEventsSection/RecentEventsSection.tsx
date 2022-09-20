import Column from "@src/atomComponents/Grid/Column";
import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import UserRecentActions from "./User/UserRecentActions";

const StyledTitle = styled.h1`
font-family: 'Vazirmatn';
font-style: normal;
font-weight: 800;
font-size: 24px;
text-align: right;

color: #3D195B;
`

const userIds = [0, 1]

const RecentEventsSection: FC = (): ReactElement => {

    return <Column styles={{
        gap: '24px'
    }}>
        <StyledTitle>
            آخرین رویداد‌ها
        </StyledTitle>
        {
            userIds.map(id => {
                return <UserRecentActions id={id} />
            })
        }
    </Column>
}

export default RecentEventsSection