import React from "react";
import styled from "styled-components";

export const Container = (props) => (
    <ContainerStyled {...props}>{props.children}</ContainerStyled>
);

const ContainerStyled = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    padding: 0px 15px;
    display: ${(props) => props.display};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
`;
