import styled from "styled-components";
import { Media } from "../../../lib";
export const Title = styled.span`
    font-size: ${(props) => (props.active ? "40px" : "20px")};
    opacity: ${(props) => (props.active ? "1" : "0.7")};
    font-weight: 500;
    text-decoration: ${(props) => (props.isOpen ? "none" : "underline")};
    transition: all 250ms ease;
    &:hover {
        opacity: 1;
    }
    ${Media.tablet} {
        font-size: ${(props) => (props.active ? "20px" : "18px")};
    }
`;
