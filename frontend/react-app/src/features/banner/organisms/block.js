import React from "react";
import styled from "styled-components";
export const Block = (props) => (
    <BlockWrapper {...props}>{props.children}</BlockWrapper>
);

const BlockWrapper = styled.div`
    position: relative;
    ${(props) => props.gap && "margin: -1px"}
`;
