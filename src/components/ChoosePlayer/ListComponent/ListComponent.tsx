import useManagePlayer from "@src/helpers/useManagePlayer";
import { serverPlayers } from "@src/state/players";
import React, {FC, ReactElement} from "react"
import { useRecoilState } from "recoil";
import styled from "styled-components"
import Button from "../../../atomComponents/Button/Button";
import ListItem from "../../../atomComponents/List/ListItem";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
`

const ListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const Colomn = styled.span`
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    display: flex;
    align-items: center;
    text-align: right;

    color: #999999;
`

const PaginationContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`

const PaginationNumber = styled.span`
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #3D195B;

`

const PaginationControl = styled.span<{
    dir: 'forward' | 'backward';
}>`
    display: flex;
    flex-direction: ${props => props.dir === 'forward' ? 'row-reverse' : 'row'};
    gap: 8px;
`

const ListComponent: FC = (): ReactElement => {
    const {addPlayer} = useManagePlayer()
    const [playerList,] = useRecoilState(serverPlayers)
    return (
        <Container>
            <ListHeader>
                <Colomn>
                    نام بازیکن
                </Colomn>
                <Colomn>
                   عملکرد 
                </Colomn>
                <Colomn>
                    قیمت
                </Colomn>
            </ListHeader>
            {
                playerList.map(player => {
                    return <ListItem  
                    styles={{
                        defaultWidth: 240,
                        defaultHeight: 40,
                        activeBgColor: 'white',
                        border: {
                            value: '1px solid #EFEFEF',
                            radius: 0
                        },
                    }}
                    name={player.web_name} 
                    position={'CEH'}
                    staticNumbers={{
                        performance: player.score,
                        price: player.price
                    }}

                    onClickFn={() => addPlayer(player)}
                    />
                })
            }
            <PaginationContainer>
                <PaginationControl dir="forward">
                    {/* need refactor */}
                    <Button active={false} 
                    styles={{
                        defaultWidth: 25,
                        defaultHeight: 40
                    }}
                    >
                        <svg width="26" height="40" viewBox="0 0 26 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="26" height="40" fill="white"/>
                        <path d="M10.9099 30.92L17.4299 24.4C18.1999 23.63 18.1999 22.37 17.4299 21.6L10.9099 15.08" stroke="#3D195B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>
                    <Button active={false} 
                    styles={{
                        defaultWidth: 25,
                        defaultHeight: 40
                    }}
                    >
                        <svg width="27" height="40" viewBox="0 0 27 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" width="26" height="40" fill="white"/>
                        <path d="M14.425 29.6L19.8584 24.1667C20.5 23.525 20.5 22.475 19.8584 21.8334L14.425 16.4" stroke="#999999" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.42505 29.6L12.8584 24.1667C13.5 23.525 13.5 22.475 12.8584 21.8334L7.42505 16.4" stroke="#999999" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>
                </PaginationControl>
                <PaginationNumber>صفحه ۱ از ۲</PaginationNumber>
                <PaginationControl dir="backward">
                    <Button active={false} 
                    styles={{
                        defaultHeight: 40,
                        defaultWidth: 25
                    }}
                    >
                        <svg width="25" height="40" viewBox="0 0 25 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="25" height="40" fill="white"/>
                        <path d="M16.0901 30.92L9.57009 24.4C8.80009 23.63 8.80009 22.37 9.57009 21.6L16.0901 15.08" stroke="#3D195B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>

                    <Button active={false} 
                    styles={{
                        defaultWidth: 25,
                        defaultHeight: 40
                    }}
                    >
                        <svg width="27" height="40" viewBox="0 0 27 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" width="25" height="40" fill="white"/>
                        <path d="M12.575 29.6L7.14162 24.1667C6.49995 23.525 6.49995 22.475 7.14162 21.8334L12.575 16.4" stroke="#999999" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.575 29.6L14.1416 24.1667C13.5 23.525 13.5 22.475 14.1416 21.8334L19.575 16.4" stroke="#999999" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Button>
                </PaginationControl>
            </PaginationContainer>
        </Container>
    )
}

export default ListComponent