import React from "react";
import styled from "styled-components";
import {Media} from "../../../lib";
export const Title = ({ children }) => (
    <StyledTitle>{children}</StyledTitle>
);

const StyledTitle = styled.p`
    font-size: 20px;
    margin: 10px 0;
    ${Media.smallDesktop} {
        font-size: 18px;
    }
    ${Media.mobile} {
        text-align: center;
    }
`;
