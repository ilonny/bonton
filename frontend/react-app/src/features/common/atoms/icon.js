import React from "react";
import styled from "styled-components";
import { Image } from "../lib";
import { Color } from "../../../lib/theme";
export const Icon = (props) => {
    switch (props.type) {
        //планируется доработка если будут другие типы иконок
        case "simple":
            return (
                <IconImage src={Image[props.name]} {...props} />
            )
        default:
            return (
                <IconWrapper {...props}>
                    <IconImage src={Image[props.name]} {...props} />
                </IconWrapper>
            );
    }
};
const IconWrapper = styled.div`
    width: ${(props) => props.wrapperWidth}px;
    height: ${(props) => props.wrapperHeight}px;
    padding: ${(props) => props.padding}px;
    border-radius: 100px;
    border: 1px solid ${(props) => (props.color ? props.color : Color.black)};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 250ms ease;
    &:hover {
        opacity: 0.8;
    }
`;

const IconImage = styled.img`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    color: ${(props) => (props.color ? props.color : Color.black)};
`;
