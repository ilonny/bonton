import React from "react";
import styled from "styled-components";
import { Title, Text, LinkStyled } from "../atoms";
import { Media } from "../../../lib";
export const Col = (props) => (
    <ColWrapper>
        {props.simple ? (
            props.children
        ) : (
            <>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <LinkStyled href={props.linkHref}>{props.linkText}</LinkStyled>
            </>
        )}
    </ColWrapper>
);

const ColWrapper = styled.div`
    flex: 1 1 33.333333%;
    ${Media.tablet} {
        flex: 1 1 50%;
        margin-bottom: 15px;
        margin-left: 0 !important;
    }
    ${Media.mobile} {
        flex: 1 1 100%;
    }
`;
