import React from 'react'
import styled from 'styled-components'
import ChoosePlayerComponent from '../../components/ChoosePlayer/ChoosePlayer'
import Header from '../../components/Header/Header'
import CreateTeamNavbar from '../../components/Navbar/Navbar'
import WeakSeason from '../../components/WeakSeason/WeakSeason'

const Container = styled.div`
    /* display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh; */
`

const MakeTeamPage = () => {
    return (
        <Container>
            <Header />
            <CreateTeamNavbar />
            <WeakSeason />
            <ChoosePlayerComponent />
        </Container>
    )
}

export default MakeTeamPage