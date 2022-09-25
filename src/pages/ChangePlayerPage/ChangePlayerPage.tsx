import Container from '@src/atomComponents/Grid/Container'
import Row from '@src/atomComponents/Grid/Row'
import ChangeTimebar from '@src/components/ChangeTimebar/ChangeTimebar'
import ChangePlayerSoccerField from '@src/components/SoccerFieldView/ChangePlayerSoccerField'
import WeakSeason from '@src/components/WeakSeason/WeakSeason'
import React, {FC, ReactElement} from 'react'
import styled from 'styled-components'

const StyledContainer = styled(Container)`
margin: 0 auto 0 auto;
width: fit-content;
box-sizing: 'content-box';
`

const ChangePlayerPage: FC = (): ReactElement => {
    return <StyledContainer styles={{
        gridTemplateColumns: '273px 869px',
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
        <Row styles={{
            gridArea: '2 / 2 / 2 /2',
            width: '869px',
            height: '768px',
        }}>
            <ChangePlayerSoccerField />
        </Row>

    </StyledContainer>
}

export default ChangePlayerPage