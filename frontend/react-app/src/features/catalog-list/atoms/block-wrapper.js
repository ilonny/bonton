import styled from "styled-components";
import { Media } from "../../../lib";
export const BlockWrapper = styled.div`
    padding: 10px;
    padding-bottom: 40px;
    flex: 1;
    flex: 1 1 33.33333333%;
    max-width: 33.33333333%;
    &:hover {
        [hover_hide] {
            opacity: 0;
        }
    }
    // ${Media.smallDesktop} {
    //     flex: 1 1 33.33333333%;
    //     max-width: 33.33333333%;
    // }
    ${Media.tablet} {
        flex: 1 1 50%;
        max-width: 50%;
    }
    ${Media.mobile} {
        flex: 1 1 100%;
        max-width: 100%;
    }
`;
