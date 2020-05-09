import React from "react";
import styled from "styled-components";
export const Block = ({ children }) => <BlockWrapper>{children}</BlockWrapper>;

const BlockWrapper = styled.div`
    position: relative;
    overflow: hidden;
    margin: -1px;
`
