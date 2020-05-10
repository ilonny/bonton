import React from "react";
import styled from "styled-components";
import { Media } from "../../../lib";
export const CategoryTitle = (props) => (
    <>
        <Line />
        <Title>{props.children}</Title>
    </>
);

const Line = styled.div`
    width: 87px;
    height: 3px;
    background: #c4c4c4;
    ${Media.tablet} {
        width: 57px;
        height: 1px;
    }
`;
const Title = styled.h6`
    font-size: 36px;
    margin-top: 20px;
    font-weight: 500;
    margin-bottom: 30px;
    ${Media.tablet} {
        font-size: 22px;
        margin-top: 10px;
        margin-bottom: 20px;
    }
    ${Media.mobile} {
        font-size: 18px;
        margin-top: 5px;
        margin-bottom: 16px;
    }
`;
