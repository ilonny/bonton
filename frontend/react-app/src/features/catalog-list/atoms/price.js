// import React from "react";
import styled from "styled-components";
import { Color, Media } from "../../../lib";
export const Price = styled.p`
    color: ${Color.red};
    font-weight: 500;
    ${Media.mobile} {
        text-align: center;
        flex: 1;
        margin-bottom: 10px;
    }
`;
