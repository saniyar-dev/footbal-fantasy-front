import React, {FC, ReactElement, useContext, useState} from "react";
import styled from "styled-components";
import ButtonGroup from "../../atomComponents/Button/ButtonGroup";
import { ButtonType } from "../../atomComponents/Button/types";

const Container = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    width: 770px;
    height: 80px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin: 0 auto 0 auto;

    position: relative;
    bottom: 40px;
`

const ButtonGrouppCOntext = React.createContext<{selectedId: number, changeSelectedId: (id: number) => void}>({selectedId: 0, changeSelectedId: (id: number) => { throw new Error()}})
const   ButtonGroupp = ({children, defaultId, onChange}: {children: React.ReactNode, defaultId: number, onChange: (id: number) => void}) => {

    const [selectedId, setDefaultId] = useState(defaultId)

   return  <ButtonGrouppCOntext.Provider value={{selectedId, changeSelectedId: (id) => {
    onChange(id)
    setDefaultId(id)
   }}}>
    {children}
    </ButtonGrouppCOntext.Provider>
}

const ButtonGroupBtn = ({id, children}: {id: number, children: React.ReactNode}) => {

    const {selectedId, changeSelectedId } =useContext(ButtonGrouppCOntext);
    return <div className={id === selectedId ? "active" : ""} onClick={() => changeSelectedId(id)}>{children}</div> 

}

const CreateTeamNavbar: FC = (): ReactElement => {
    const [NavItemsList, setNavItemsList] = useState<Array<ButtonType>>([
        {
            id: 0,
            title: 'تیم من',
            active: true
        },
        {
            id: 1,
            title: 'نقل و انتقالات',
            active: false 
        },
        {
            id: 2,
            title: 'آخرین رویداد‌ها',
            active: false 
        },
        {
            id: 3,
            title: 'پروفایل',
            active: false 
        },
        {
            id: 4,
            title: 'جوایز',
            active: false 
        },
    ])


    return (
        <Container>
            <ButtonGroup 
                buttonList={NavItemsList}
                activeBgColor="linear-gradient(262.49deg, #05F4F1 -27.69%, #00FF87 112.29%)"
                defaultBgColor="white"
                activeDefaultId={0}
                changeFunction={setNavItemsList}
                defaultHeight={60}
                defaultWidth={142}
            />
            <ButtonGroupp onChange={(id: number) => {console.log(id)}} defaultId={0}>
                <ButtonGroupBtn id={1}> 
                    <i>Kooft</i>
                </ButtonGroupBtn>
                <ButtonGroupBtn id={0}> 
                    <b>award</b>
                </ButtonGroupBtn>
            </ButtonGroupp>
       </Container>
    )
}



export default CreateTeamNavbar