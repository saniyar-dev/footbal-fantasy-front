import Container from '@src/atomComponents/Grid/Container'
import Row from '@src/atomComponents/Grid/Row'
import ChangeTimebar from '@src/components/ChangeTimebar/ChangeTimebar'
import WeakSeason from '@src/components/WeakSeason/WeakSeason'
import React, {FC, ReactElement} from 'react'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
margin: 0 auto 0 auto;
box-sizing: 'content-box';
`

const ChangePlayerPage: FC = (): ReactElement => {
    return <StyledContainer styles={{
        gridTemplateColumns: 'auto auto',
        gridTemplateRows: 'auto auto auto',
        gap: '24px',
    }}>
        <Row styles={{
            justifyContent: 'space-between',
            gridArea: '1 / 2 / 1 / 2',
        }}>
            <WeakSeason />
            <ChangeTimebar />
        </Row>

    </StyledContainer>
}

export default ChangePlayerPage