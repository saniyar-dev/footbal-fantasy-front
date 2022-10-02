import Column from '@src/atomComponents/Grid/Column'
import PageTitle from '@src/atomComponents/PageTitle/PageTitle'
import React, {FC, ReactElement} from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

const StyledColumn = styled(Column)`
    margin-bottom: 128px;
`

const ProfilePage: FC = (): ReactElement => {
    return <StyledColumn styles={{
        alignItems: 'center',
        gap: '54px',
    }}>
        <>
        <PageTitle>
            اطلاعات فردی
        </PageTitle>
        <Outlet />
        </>
    </StyledColumn>
}

export default ProfilePage