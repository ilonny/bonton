import React from "react";
import styled from "styled-components";
import { MenuTitle } from "../atoms/menu-title";
import { Icon } from "../../common";
export const MenuHeader = props => (
    <MenuHeaderWrapper>
        <MenuTitle></MenuTitle>
        <MenuHeaderButton onClick={props.action}>
            <Icon name="close" width={30} height={30} type="simple"/>
        </MenuHeaderButton>
    </MenuHeaderWrapper>
);

const MenuHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

const MenuHeaderButton = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    transition: all 250ms ease;
    &:hover {
        opacity: 0.3
    }
`;
