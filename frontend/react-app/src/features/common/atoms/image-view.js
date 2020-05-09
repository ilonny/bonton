import React from "react";
import styled from "styled-components";

export const ImageView = (props) => <ImageStyled src={props.src} {...props} />;

const ImageStyled = styled.img`
    position: ${(props) => props.absolute ? 'absolute' : 'static'};
    max-width: 100%;
    display: block;
    ${(props) => props.style};
`;
