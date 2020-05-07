import React from "react";
import styled from "styled-components";

export const Container = ({ children }) => (
    <ContainerStyled>{children}</ContainerStyled>
);

const ContainerStyled = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    padding: 0px 15px;
    ${props => props.style}
`;
