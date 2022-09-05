import React from 'react'
import styled from 'styled-components'
import Header from '../../components/Header/Header'
import CreateTeamNavbar from '../../components/Navbar/Navbar'
import WeakSeason from '../../components/WeakSeason/WeakSeason'
// import MiddleComponent from '../../components/MiddleContainer/MiddleContainer'
import Container from '@atomComponents/Grid/Container'
import Row from '@src/atomComponents/Grid/Row'
import Column from '@src/atomComponents/Grid/Column'
import ChoosePlayerComponent from '@src/components/ChoosePlayer/ChoosePlayer'
import Wallet from '@src/components/Wallet/Wallet'
import RahnemaLogo from '@src/components/RahnemaLogo/RahnemaLogo'
import RemainingPlayer from '@src/components/RemainingPlayer/RemainingPlayer'
import ButtonGroup, { ButtonGroupBtn } from '@src/atomComponents/Button/ButtonGroup'

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

const MakeTeamPage = () => {
    return (
        <Container styles={{
            width: '100%',
            height: '100vh',
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
            <Row styles={{}}>
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
                                    <ButtonGroup defaultId={0} onChange={(id) => console.log('شماتیک و لیست', id)}
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
                                        <ButtonGroupBtn id={0}>شماتیک ترکیب</ButtonGroupBtn>
                                        <ButtonGroupBtn id={1}>مشاهده لیست</ButtonGroupBtn>
                                    </ButtonGroup>
                                </SpecialButtonRow>
                            </SpecialLogoColumn>
                            <RemainingPlayer />
                        </Row>
                    </Column>
                </Container>
                {/* <MiddleComponent /> */}
            </Row>
        </Container>
    )
}

export default MakeTeamPage