import React from "react";
import styled from "styled-components"
import {HeaderDelivery} from "./headerDelivery"
export const Header = () => (
    <HeaderBox>
        <HeaderDelivery/>
    </HeaderBox>
)

const HeaderBox = styled.div`
    display: block;
    background-color: black;
`