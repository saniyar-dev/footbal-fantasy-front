import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import CreateTeamNavbar from '../../components/Navbar/Navbar'
import WeakSeason from '../../components/WeakSeason/WeakSeason'
import MiddleComponent from '../../components/MiddleContainer/MiddleContainer'
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
            <MiddleComponent />
        </Container>
    )
}

export default MakeTeamPage