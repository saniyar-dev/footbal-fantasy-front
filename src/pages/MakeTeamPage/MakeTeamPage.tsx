import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import CreateTeamNavbar from '../../components/Navbar/Navbar'
import WeakSeason from '../../components/WeakSeason/WeakSeason'
import MiddleComponent from '../../components/MiddleContainer/MiddleContainer'
import Container from '@atomComponents/Grid/Container'
import Row from '@atomComponents/Grid/Container'

const MakeTeamPage = () => {
    return (
        <Container styles={{
            width: '100%',
            height: '100vh',
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto auto auto'
        }}>
            <Row styles={{

            }}>
                <Header />
                <CreateTeamNavbar />
            </Row>
            <WeakSeason />
            <MiddleComponent />
        </Container>
    )
}

export default MakeTeamPage