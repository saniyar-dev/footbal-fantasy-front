import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import {ButtonGroup, ButtonGroupBtn} from "../../atomComponents/Button/ButtonGroup";

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
    const NavItemsList = [
        {
            id: 0,
            title: 'تیم من',
        },
        {
            id: 1,
            title: 'نقل و انتقالات',
        },
        {
            id: 2,
            title: 'آخرین رویداد‌ها',
        },
        {
            id: 3,
            title: 'پروفایل',
        },
        {
            id: 4,
            title: 'جوایز',
        },
    ]


    return (
        <Container>
            <ButtonGroup
            styles={{
                defaultWidth: 142,
                defaultHeight: 60,
                activeBgColor: 'linear-gradient(262.49deg, #05F4F1 -27.69%, #00FF87 112.29%)',
                defaultBgColor: 'white',
                border: {
                    radius: 8,
                    value: '',
                },
                font: {
                    fontSize: 17,
                    fontWeight: 900,
                }
            }}
            onChange={(id) => console.log(id)}
            defaultId={0}
            >
                {
                    NavItemsList.map((navItem) => <ButtonGroupBtn id={navItem.id} key={navItem.id   }>{navItem.title}</ButtonGroupBtn>)
                }
            </ButtonGroup>
       </Container>
    )
}

export default CreateTeamNavbar