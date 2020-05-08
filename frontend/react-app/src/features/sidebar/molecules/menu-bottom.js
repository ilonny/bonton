import React from "react";
import styled from "styled-components";
import { GrayText } from "../atoms/gray-text";

export const MenuBottom = (props) => (
    <MenuBottomWrapper>
        <GrayText>
            <p>BONTON — Интернет-магазин одежды в г. Сургут</p>
            <a href="/">Политика конфиденциальности</a>
            <a href="/">Карта сайта</a>
        </GrayText>
    </MenuBottomWrapper>
);

const MenuBottomWrapper = styled.div`
    padding: 20px;
`;
