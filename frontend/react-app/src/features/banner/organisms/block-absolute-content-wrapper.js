import styled from "styled-components";
import { Media } from "../../../lib";

export const BlockAbsoluteContentWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: ${props => props.small ? '36px' : '0px 100px 120px 100px'};
    ${Media.smallDesktop} {
        padding: ${props => props.small ? '20px' : '70px'};
    }
    ${Media.tablet} {
        padding: ${props => props.small ? '15px' : '30px'};
    }
    & a {
        display: block;
        width: 100%;
    }
`;
