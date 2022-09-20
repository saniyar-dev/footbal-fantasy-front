import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import CreateTeamNavbar from '../../components/Navbar/Navbar'
import WeakSeason from '../../components/WeakSeason/WeakSeason'
import Container from '@atomComponents/Grid/Container'
import Row from '@src/atomComponents/Grid/Row'
import Column from '@src/atomComponents/Grid/Column'
import ChoosePlayerComponent from '@src/components/ChoosePlayer/ChoosePlayer'
import Wallet from '@src/components/Wallet/Wallet'
import RahnemaLogo from '@src/components/RahnemaLogo/RahnemaLogo'
import RemainingPlayer from '@src/components/RemainingPlayer/RemainingPlayer'
import ButtonGroup, { ButtonGroupBtn } from '@src/atomComponents/Button/ButtonGroup'
import ListView from '@src/components/ListView/ListView'
import SoccerFieldView from '@src/components/SoccerFieldView/SoccerFieldView'
import useAppState from '@src/services/useAppState'

const SpecialButtonRow = styled(Row)`
    width: 272px;
    height: 40px;

    background: #F7F7F7;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

const SpecialLogoColumn = styled(Column)`
    justify-content: center;
    align-items: center;
`

const SpecialMainRow = styled(Row)`
    margin-left: auto;
    margin-right: auto;
`

const SpecialMainViewContainer = styled(Container)`
width: 869px;
height: 768px;
margin-bottom: 104px;

border-radius: 16px;
background-color: white;
filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15));
`

type MainViewType = "SoccerFieldView" | "ListView"

const MakeTeamPage = () => {
    const [mainView, setMainView] = useState<MainViewType>("SoccerFieldView")

    const {getAppState} = useAppState()
    
    useEffect(() => {
        getAppState()
    }, [])
    return (
        <Container styles={{
            width: '100%',
            height: '100%',
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'auto auto auto'
        }}>
            <Column styles={{
                width: '100%',
            }}>
                <Header />
                <CreateTeamNavbar />
            </Column>
            <Row styles={{
            }}>
                <WeakSeason />
            </Row>
            <SpecialMainRow styles={{}}>
                <Container styles={{
                    gridTemplateColumns: 'auto auto',
                    gap: '24px',
                }}>
                    <Column styles={{}}>
                        <ChoosePlayerComponent />
                    </Column>
                    <Column styles={{}}>
                        <Row styles={{
                            gap: '24px',
                        }}>
                            <Wallet />
                            <SpecialLogoColumn styles={{}}>
                                <RahnemaLogo />
                                <SpecialButtonRow styles={{}}>
                                    <ButtonGroup defaultId={0} onChange={() => {}}
                                    styles={{
                                        defaultHeight: 30,
                                        defaultWidth: 131,
                                        defaultBgColor: undefined,
                                        activeBgColor: 'white',
                                        border: {
                                            radius: 8,
                                            value: '',
                                        },
                                        font: {
                                            fontSize: 14,
                                            fontWeight: 700,
                                        },
                                    }}
                                    >
                                        <span onClick={() => setMainView("SoccerFieldView")}>
                                            <ButtonGroupBtn id={0}>شماتیک ترکیب</ButtonGroupBtn>
                                        </span>
                                        <span onClick={() => setMainView("ListView")}>
                                            <ButtonGroupBtn id={1}>مشاهده لیست</ButtonGroupBtn>
                                        </span>
                                    </ButtonGroup>
                                </SpecialButtonRow>
                            </SpecialLogoColumn>
                            <RemainingPlayer />
                        </Row>
                        <SpecialMainViewContainer styles={{
                            gridTemplateColumns: 'auto',
                            gridTemplateRows: 'auto'
                        }}>
                            {
                                mainView === "SoccerFieldView" ? <SoccerFieldView /> : <ListView />
                            }
                        </SpecialMainViewContainer>
                    </Column>
                </Container>
            </SpecialMainRow>
        </Container>
    )
}

export default MakeTeamPage