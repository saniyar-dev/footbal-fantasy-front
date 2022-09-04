import React, {FC, ReactElement} from "react"
import styled from "styled-components"
import {ButtonGroup, ButtonGroupBtn} from "../../../atomComponents/Button/ButtonGroup";



const Container = styled.div`
    display: flex;
    gap: 11px;
    justify-content: center;
`

const FilterComponent: FC = (): ReactElement => {
    const filterList = [
        {
            id: 0,
            title: 'All',
        },
        {
            id: 1,
            title: 'GK',
        },
        {
            id: 2,
            title: 'DEF',
        },
        {
            id: 3,
            title: 'MID',
        },
        {
            id: 4,
            title: 'ATT',
        },
    ]
    return (
        <Container>
            <ButtonGroup
            styles={{
                defaultHeight: 30,
                defaultWidth: 40,
                activeBgColor:  "linear-gradient(269.48deg, #04F5EC -30.14%, #03FBB8 109.7%)",
                defaultBgColor: 'white',
                border: {
                    radius: 8,
                    value: '1px solid #EFEFEF'
                },
                font: {
                    fontSize: 12,
                    fontWeight: 400,
                },
            }}
            defaultId={0}
            onChange={(id) => console.log(id)}
            >
                {
                    filterList.map((filterItem) => <ButtonGroupBtn id={filterItem.id} key={filterItem.id}>{filterItem.title}</ButtonGroupBtn>)
                }
            </ButtonGroup>
        </Container>
    )
}

export default FilterComponent