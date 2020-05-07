import React from "react";
import styled from "styled-components";
import { MenuHeader } from "../molecules/menu-header";
export const SideBarTemplate = (props) => {
    return <SideBarContainer {...props}>
        <MenuHeader />
    </SideBarContainer>;
};

const SideBarContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 600px;
    background: #fff;
    transition: all 250ms ease;
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100")}%);
    box-shadow: 10px 0px 10px 1px rgba(0, 0, 0, 0.2);
`;
