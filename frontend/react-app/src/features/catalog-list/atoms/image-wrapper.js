import styled from "styled-components";
import {Media} from "../../../lib";
export const ImageWrapper = styled.div`
    padding: 10px;
    flex: 1;
    width: 100%;
    height: 400px;
    // min-height: 300px;
    // max-height: 300px;
    position: relative;
    ${Media.mobile} {
        height: 250px;
    }
`;
