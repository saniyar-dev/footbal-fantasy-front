import React, {FC, ReactElement} from "react"
import styled from "styled-components"
import ListItem from "../../ListComponents/ListItem";

interface ListItemType {
    name: string;
    performance: number;
    price: number;
}

const ListItems: Array<ListItemType> = [
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
    {
        name: 'saniyar',
        performance: 10,
        price: 10,
    },
]

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

const ListComponent: FC = (): ReactElement => {
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
                ListItems.map(listItem => {
                    return <ListItem width={240} height={40} name={listItem.name} position={'CEH'}
                    staticNumbers={{
                        performance: listItem.performance,
                        price: listItem.price
                    }}
                    />
                })
            }
        </Container>
    )
}

export default ListComponent