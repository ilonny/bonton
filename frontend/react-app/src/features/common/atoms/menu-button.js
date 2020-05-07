import React from "react";
import styled from "styled-components";
import menuButttonIcon from "../../../library/icons/menu-button.svg";
import { Media } from "../../../lib"

export const MenuButton = () => (
    <MenuButtonContainer>
        <MenuButttonImg src={menuButttonIcon} />
        <MenuButtonText>МЕНЮ</MenuButtonText>
    </MenuButtonContainer>
);

const MenuButtonContainer = styled.div`
    display: flex;
    align-items: center;
    transition: all 250ms ease;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;
const MenuButttonImg = styled.img`
    width: 34;
    height: 22;
`;
const MenuButtonText = styled.p`
    margin-left: 20px;
    ${Media.mobile} {
        display: none;
    }
`