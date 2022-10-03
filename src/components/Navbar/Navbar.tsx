import React, {FC, ReactElement, useCallback, useMemo} from "react";
import styled from "styled-components";
import {ButtonGroup, ButtonGroupBtn} from "../../atomComponents/Button/ButtonGroup";
import Row from "@src/atomComponents/Grid/Row";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "@src/services/useAuth";

const NavItemsList = [
    {
        id: 0,
        title: 'تیم من',
        path: 'create-team',
    },
    {
        id: 1,
        title: 'نقل و انتقالات',
        path: 'change-players',
    },
    {
        id: 2,
        title: 'آخرین رویداد‌ها',
        path: 'recent-events',
    },
    {
        id: 3,
        title: 'پروفایل',
        path: 'profile',
    },
    {
        id: 4,
        title: 'جوایز',
        path: 'rewards',
    },
]


const Container = styled(Row)`
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    width: 924px;
    height: 80px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin: 0 auto 0 auto;

    position: relative;
    bottom: 40px;
`

const StyledSignoutText = styled.span`
font-weight: 400 !important;
`

const CreateTeamNavbar: FC = (): ReactElement => {
    const navigate = useNavigate()
    const location = useLocation()
    const selectedId = useMemo<number>((): number => {
        const value = NavItemsList.filter(item => location.pathname.startsWith(`/app/${item.path}`))[0]?.id
        return value ? value : 0;
    }, [location])
    const {Signout} = useAuth()

    const changePage = useCallback((id: number): void => {
        if (id === 5) {
            Signout()
            navigate('/user/login')
            return;
        }
        const path = NavItemsList.find(item => item.id === id)?.path
        navigate(`/app/${path}`)
    }, [Signout, navigate])

    return (
        <Container>
            <ButtonGroup
            styles={{
                width: '142px',
                height: '60px',
                background: 'linear-gradient(262.49deg, #05F4F1 -27.69%, #00FF87 112.29%)',
                borderRadius: '8px',
                fontSize: '17px',
                fontWeight: '900'
            }}
            onChange={(id) => changePage(id)}
            defaultId={selectedId}
            >
                {
                    NavItemsList.map((navItem) => <ButtonGroupBtn id={navItem.id} key={navItem.id   }>{navItem.title}</ButtonGroupBtn>)
                }
                <ButtonGroupBtn id={5} key={5}>
                    <StyledSignoutText>
                        خروج
                    </StyledSignoutText>
                </ButtonGroupBtn>
            </ButtonGroup>
       </Container>
    )
}

export default CreateTeamNavbar