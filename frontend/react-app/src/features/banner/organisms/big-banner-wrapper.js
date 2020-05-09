import styled from "styled-components";
import { Media } from "../../../lib";

export const BigBannerWrapper = styled.div`
    margin: 30px 0;
    display: flex;
    flex: 1;
    align-items: stretch;
    justify-content: stretch;
    ${Media.mobile} {
        flex-wrap: wrap;
        margin: 30px 0;
    }
`;
