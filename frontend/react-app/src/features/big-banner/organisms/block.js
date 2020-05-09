import React from "react";
import styled from "styled-components";
export const Block = ({ children }) => <BlockWrapper>{children}</BlockWrapper>;

const BlockWrapper = styled.div`
    position: relative;
    overflow: hidden;
    margin: -1px;
    // display: flex;
    // flex: 1;
    // flex-direction: column;
    // justify-content: space-between;
    // align-items: center;
    // padding: 0px 100px 120px 100px;
`;
