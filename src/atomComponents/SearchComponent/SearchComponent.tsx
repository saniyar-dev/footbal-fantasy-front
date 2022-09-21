import React, {createContext, FC, ReactElement, useContext, useEffect, useState} from "react"
import styled from "styled-components"
import iconUrl from '@assets/Icons/searchIcon.svg'
import Row from "../Grid/Row"

const SearchContext = createContext<{
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    isFocused: boolean;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
    placeHolder: string;
}>({
    inputValue: '', 
    setInputValue: () => {throw new Error("search input value doesn't have init values")}, 
    isFocused: false,
    setIsFocused: () => console.log(1),
    placeHolder: '',
})

const SearchStyledRow = styled(Row)`
position: relative;
align-items: center;
gap: 8px;
padding: 0 20px 0 20px;

box-sizing: border-box;
height: 40px;
width: 100%;

background: #FFFFFF;
border-bottom: 1px solid #E4E4E4;
`

const SearchComponent: FC<{
    searchFn: (str: string) => Promise<void>;
    placeHolder?: string;
}> = ({searchFn, placeHolder}): ReactElement => {
    const [inputValue, setInputValue] = useState<string>('')
    const [isFocused, setIsFocused] = useState<boolean>(false)

    useEffect(() => {
        searchFn(inputValue)
    }, [inputValue])
    return (
        <SearchContext.Provider value={{inputValue, setInputValue, isFocused, setIsFocused, placeHolder: placeHolder ? placeHolder : 'جستجو'}}>
            <SearchStyledRow>
                <SearchIcon />
                <Input />
            </SearchStyledRow>
        </SearchContext.Provider>
    )
}

const InputStyled = styled.input`
position: absolute;
display: block;
flex-grow: 1;

box-sizing: border-box;
height: 40px;
width: 100%;
background: none;
padding-right: 32px;

font-family: 'Vazirmatn';
font-style: normal;
font-weight: 300;
font-size: 14px;
text-align: right;

color: rgba(61, 25, 91, 0.67);

&:focus {
    outline: none;
}
`

const Input: FC = () => {
    const {setInputValue, inputValue, placeHolder} = useContext(SearchContext)
    return <InputStyled value={inputValue} onChange={(e) => {
        e.preventDefault();
        setInputValue(e.target.value)
    }}
    placeholder={placeHolder}
    />
}

const SearchIcon = styled.img.attrs(() => {
    return {
        src: iconUrl
    }
})`
`

export default SearchComponent