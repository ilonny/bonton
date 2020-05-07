import React from "react";
import styled from "styled-components";
import { Color } from "../../../lib";

export const CategoryTitle = (props) => {
    const { text, type } = props;
    let fontSize, fontWeight, color;
    switch (type) {
        case "first":
            fontSize = "26px";
            fontWeight = 600;
            color = Color.black;
            break;
        case "second":
            fontSize = "18px";
            break;
        case "third":
            fontSize = "18px";
            break;
        default:
            color = "#717171";
            break;
    }
    return (
        <CategoryTitleText
            {...props}
            fontSize={fontSize}
            fontWeight={fontWeight}
            color={color}
        >
            {text}
        </CategoryTitleText>
    );
};

const CategoryTitleText = styled.p`
    color: ${(props) => (props.color ? props.color : "inherit")};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    margin: 0;
`;
// const WrapperBig = styled.div`
//     padding: 20px;
// `;
