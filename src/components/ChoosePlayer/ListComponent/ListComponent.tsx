import React, {FC, ReactElement} from "react"
import styled from "styled-components"
import ListItem from "../../ListComponents/ListItem";

interface ListItem {
    name: string;
    performance: number;
    price: number;
}

const ListItems: Array<ListItem> = [
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
const ListComponent: FC = (): ReactElement => {
    return (
        <Container>
            {
                ListItems.map(listItem => {
                    return <ListItem width={240} height={40}>{listItem.name + listItem.performance}</ListItem>
                })
            }
        </Container>
    )
}

export default ListComponent