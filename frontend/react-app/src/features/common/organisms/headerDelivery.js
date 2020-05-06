import React from "react";
import styled from "styled-components";
import { Color, Media } from "../../../lib/theme";
export const HeaderDelivery = () => (
    <HeaderDeliveryWrapper>
        Бесплатная доставка при заказе на сумму от 5000 руб.
    </HeaderDeliveryWrapper>
);

const HeaderDeliveryWrapper = styled.div`
    background-color: ${Color.black};
    padding: 10px;
    color: #fff;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    ${Media.mobile} {
        padding: 7px;
        font-size: 12px;
    }
`;
