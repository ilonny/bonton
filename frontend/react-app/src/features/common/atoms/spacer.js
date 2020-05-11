// import React from "react";
import styled from "styled-components";
import { Media } from "../../../lib";
import {WithTag} from "../../styled-components-layout"

export const Spacer = styled(WithTag)`
    height: 100px;
    ${Media.tablet} {
        height: 50px;
    }
    ${Media.mobile} {
        height: 20px;
    }
`;
