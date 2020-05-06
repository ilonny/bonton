import React from "react";
import styled from "styled-components";
import { HeaderDelivery } from "./headerDelivery";
export const Header = () => (
    <>
        <HeaderDelivery />
        <HeaderContent></HeaderContent>
    </>
);

const HeaderContent = styled.div`
    padding: 30px 0px 30px 0px;
    border-bottom: 1px solid rgb(228, 228, 228);
`;
