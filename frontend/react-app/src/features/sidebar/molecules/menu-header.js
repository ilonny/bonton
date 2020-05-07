import React from "react";
import styled from "styled-components";
import { MenuTitle } from "../atoms/menu-title";
import { Icon } from "../../common";
export const MenuHeader = props => (
    <MenuHeaderWrapper>
        <MenuTitle></MenuTitle>
        <MenuHeaderButton onClick={props.action}>
            <Icon />
        </MenuHeaderButton>
    </MenuHeaderWrapper>
);

const MenuHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const MenuHeaderButton = styled.button`
    background: transparent;
    border: none;
`;
