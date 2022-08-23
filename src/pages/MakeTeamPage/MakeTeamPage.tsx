import React from 'react'
import styled from 'styled-components'
import ChoosePlayerComponent from '../../components/ChoosePlayer/ChoosePlayer'
import Header from '../../components/Header/Header'
import CreateTeamNavbar from '../../components/Navbar/Navbar'
import WeakSeason from '../../components/WeakSeason/WeakSeason'

interface NavItem {
    title: string;
    active: boolean;
}

const NavItems: Array<NavItem> = [
    {
        title: 'تیم من',
        active: true
    },
    {
        title: 'نقل و انتقالات',
        active: false 
    },
    {
        title: 'آخرین رویداد‌ها',
        active: false 
    },
    {
        title: 'پروفایل',
        active: false 
    },
    {
        title: 'جوایز',
        active: false 
    },
]

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
            <CreateTeamNavbar NavItemsList={NavItems}/>
            <WeakSeason />
            <ChoosePlayerComponent />
        </Container>
    )
}

export default MakeTeamPage