import React from "react";
import styled from "styled-components";
import { Row } from "../../styled-components-layout";
import { Icon } from "../../common";

export const Place = () => (
    <Row align="center">
        <Icon name="place_flag" type="simple" />
        <TextStyled>Сургут</TextStyled>
    </Row>
);

const TextStyled = styled.p`
    color: #9c9c9c;
    margin-left: 5px;
    font-size: 18px;
`;
