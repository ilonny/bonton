import styled from "styled-components";
import { Color, Media } from "../../../lib";
export const Wrapper = styled.div`
    background: ${(props) => (props.active ? Color.black : "#fff")};
    color: ${(props) => (props.active ? "#fff" : Color.black)};
    padding: 25px;
    max-width: 500px;
    width: 500px;
    margin-left: -30px;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 250ms ease;
    z-index: 2;
    & svg {
        transition: all 250ms ease;
        transform: ${(props) =>
            props.active ? "rotate(180deg)" : "rotate(0deg)"};
    }
    & path {
        transition: all 250ms ease;
        fill: ${(props) => (props.active ? "#fff" : Color.red)};
    }
    & > div:not(:first-child) {
        margin-top: 15px;
    }
    & .spacer {
        height: 115px;
    }
    ${Media.tablet} {
        // position: static;
        padding: 12px;
        margin-left: -12px;
        width: 100%;
        max-width: 300px;
    }
    ${Media.mobile} {
        display: none;
    }
`;
