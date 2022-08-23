import React, {FC, ReactElement} from "react"
import styled from "styled-components"
import Button from "../../Button/Button"

type FilterTypes = 'All' | 'GK' | 'DEF' | 'MID' | 'ATT'

interface Filter {
    filterType: FilterTypes;
    active: boolean;
}

const filterList: Array<Filter> = [
    {
        filterType: 'All',
        active: true
    },
    {
        filterType: 'GK',
        active: false 
    },
    {
        filterType: 'DEF',
        active: false 
    },
    {
        filterType: 'MID',
        active: false 
    },
    {
        filterType: 'ATT',
        active: false 
    },
]

const Container = styled.div`
    display: flex;
    gap: 11px;
    justify-content: center;
`

const FilterComponent: FC = (): ReactElement => {
    return (
        <Container>
            {
                filterList.map((filter) => {
                    return <Button 
                            height={30}
                            width={40}
                            bgColor={filter.active ? 'linear-gradient(269.48deg, #04F5EC -30.14%, #03FBB8 109.7%)' : 'white'}
                            active={filter.active}>{filter.filterType}</Button>
                })
            }
        </Container>
    )
}

export default FilterComponent