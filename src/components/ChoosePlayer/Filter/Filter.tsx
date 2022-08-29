import React, {FC, ReactElement, useState} from "react"
import styled from "styled-components"
import Button from "../../../atomComponents/Button/Button"
import ButtonGroup from "../../../atomComponents/Button/ButtonGroup";
import { ButtonType } from "../../../atomComponents/Button/types";



const Container = styled.div`
    display: flex;
    gap: 11px;
    justify-content: center;
`

const FilterComponent: FC = (): ReactElement => {
    const [filterList, setFilterList]  = useState<Array<ButtonType>>([
        {
            id: 0,
            title: 'All',
            active: true
        },
        {
            id: 1,
            title: 'GK',
            active: false 
        },
        {
            id: 2,
            title: 'DEF',
            active: false 
        },
        {
            id: 3,
            title: 'MID',
            active: false 
        },
        {
            id: 4,
            title: 'ATT',
            active: false 
        },
    ])
    return (
        <Container>
            <ButtonGroup 
            buttonList={filterList}
            changeFunction={setFilterList}
            defaultWidth={40}
            defaultHeight={30}
            activeBgColor={'linear-gradient(269.48deg, #04F5EC -30.14%, #03FBB8 109.7%)'}
            defaultBgColor="white"
            activeDefaultId={0}
            defaultBorder={{
                type: "1px solid #EFEFEF"
            }}
            defaultFont={{
                fontSize: 12,
                fontWeight: 400
            }} />
        </Container>
    )
}

export default FilterComponent