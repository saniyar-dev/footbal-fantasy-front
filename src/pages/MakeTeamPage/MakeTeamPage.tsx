import React from 'react'
import Header from '../../components/Header/Header'
import CreateTeamNavbar from '../../components/Navbar/Navbar'

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
   

const MakeTeamPage = () => {
    return (
        <div>
            <Header />
            <CreateTeamNavbar NavItemsList={NavItems}/>
        </div>
    )
}

export default MakeTeamPage