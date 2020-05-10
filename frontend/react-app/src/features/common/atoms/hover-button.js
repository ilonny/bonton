import React from "react";
import styled from "styled-components";
import invert from "invert-color";

export const HoverButton = (props) => (
    <StyledButton {...props}>{props.children}</StyledButton>
);

const StyledButton = styled.button`
    padding: 16px;
    border: 1px solid;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "initial")};
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
    position: relative;
    cursor: pointer;
    transition: all 250ms ease;
    ${(props) => props.styles};
    &:hover {
        color: ${(props) =>
            props.hoverColor
                ? props.hoverColor
                : props.color
                ? invert(props.color)
                : "inherit"};
        background-color: ${(props) =>
            props.backgroundColor
                ? props.backgroundColor === "transparent"
                    ? props.color
                    : invert(props.backgroundColor)
                : "inherit"};
    }
`;
