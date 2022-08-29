import React, {FC, ReactElement, useState} from "react";
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
       </Container>
    )
}

export default CreateTeamNavbar