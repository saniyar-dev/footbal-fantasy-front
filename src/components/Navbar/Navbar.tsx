import React, {FC, ReactElement} from "react";
import styled from "styled-components";
import Button from "../Button/Button";

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

interface NavItem {
    title: string;
    active: boolean;
}

interface NavbarProps {
    NavItemsList: Array<NavItem>
}

const CreateTeamNavbar: FC<NavbarProps> = ({NavItemsList}): ReactElement => {
    return (
        <Container>
            {
                NavItemsList.map((NavItem: NavItem) => {
                    return (
                        <Button key={NavItem.title}
                         width={142} height={60} bgColor="#05F4F1" active={NavItem.active}>{NavItem.title}</Button>
                    )
                })
            }
        </Container>
    )
}

export default CreateTeamNavbar