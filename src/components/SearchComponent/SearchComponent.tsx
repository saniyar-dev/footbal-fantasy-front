import React, {FC, ReactElement} from "react"
import styled from "styled-components"
import IconUrl from '../../assets/Icons/search-normal.svg'

const Form = styled.form`

`

const SearchInput = styled.input.attrs(props => {
    return {
        placeholder: "جستجو"
    }
})<{
    width: number;
    height: number;
}>`
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};

    box-sizing: border-box;

    background: #FFFFFF;
    border-bottom: 1px solid #E4E4E4;

    font-family: Vazirmatn;
    font-size: 14px;
    font-weight: 300;
    line-height: 22px;
    text-align: right;
`

const SearchComponent: FC = (): ReactElement => {
    return (
        <SearchInput width={244} height={40}/>
    )
}

export default SearchComponent