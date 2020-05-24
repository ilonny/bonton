import React from 'react';
import styled from "styled-components";
import { Color } from "../../../lib";
export const PaginationTextLink = ({ left, text }) => (
    <Wrapper>{text}</Wrapper>
)

const Wrapper = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    color: ${Color.red};
`