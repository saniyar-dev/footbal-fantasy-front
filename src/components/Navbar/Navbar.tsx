import React, {FC, ReactElement} from "react";
import styled from "styled-components";

const Button = styled.button<{
    width: number;
    height: number;
    bgColor: string;
    active: boolean;
}>`
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
    background: ${props => {
        return props.active ? props.bgColor : 'white'
    }};
    font-family: 'Vazirmatn';
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    text-align: center;
    border-radius: 8px;
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
        <div>
            {
                NavItemsList.map((NavItem: NavItem) => {
                    return (
                        <Button key={NavItem.title}
                         width={142} height={60} bgColor="#05F4F1" active={NavItem.active}>{NavItem.title}</Button>
                    )
                })
            }
        </div>
    )
}

export default CreateTeamNavbar