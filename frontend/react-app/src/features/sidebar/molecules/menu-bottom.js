import React from "react";
import styled from "styled-components";
import { GrayText } from "../atoms/gray-text";
import {Link} from "react-router-dom";
export const MenuBottom = (props) => (
    <MenuBottomWrapper>
        <GrayText>
            <p>BONTON — Интернет-магазин одежды в г. Сургут</p>
            <Link to="/">Политика конфиденциальности</Link>
            {/* <Link to="/sitemap">Карта сайта</Link> */}
        </GrayText>
    </MenuBottomWrapper>
);

const MenuBottomWrapper = styled.div`
    padding: 20px;
`;
