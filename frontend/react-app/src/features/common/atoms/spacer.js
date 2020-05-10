// import React from "react";
import styled from "styled-components";
import { Media } from "../../../lib";

export const Spacer = styled.div`
    height: 100px;
    ${Media.tablet} {
        height: 50px;
    }
    ${Media.mobile} {
        height: 20px;
    }
`;
