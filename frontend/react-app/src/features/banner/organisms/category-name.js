import React from "react";
import styled from "styled-components";
import { Icon } from "../../common";
import {Media} from "../../../lib";
export const CategoryName = (props) => (
    <Wrapper>
        <Icon name="right_arrow_red" width="13" height="13" type="simple" />
        <Text>{props.name}</Text>
    </Wrapper>
);

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;
const Text = styled.span`
    font-size: 26px;
    color: #fff;
    text-decoration: underline;
    margin-left: 20px;
    ${Media.tablet} {
        font-size: 18px;
        margin-left: 5px;
    }
`;
