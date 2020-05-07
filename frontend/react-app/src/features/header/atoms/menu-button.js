import React from "react";
import styled from "styled-components";
import menuButttonIcon from "../../../assets/icons/menu-button.svg";
import { Media } from "../../../lib";
console.log('media lolll', Media)
export const MenuButton = ({ toggleSideBar }) => (
    <MenuButtonContainer onClick={toggleSideBar}>
        <MenuButttonImg src={menuButttonIcon} />
        <MenuButtonText>МЕНЮ</MenuButtonText>
    </MenuButtonContainer>
);

const MenuButtonContainer = styled.button`
    display: flex;
    align-items: center;
    transition: all 250ms ease;
    cursor: pointer;
    padding: 0px;
    background: transparent;
    border: none;
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
`;
