import React from "react";
import styled from "styled-components";
import { Color } from "../../../lib";

export const CategoryTitle = (props) => {
    let fontSize, fontWeight, color;
    const { text, type } = props;
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
    const CategoryTitleText = styled.p`
        color: ${color ? color : "inherit"};
        font-size: ${fontSize};
        font-weight: ${fontWeight};
        margin: 0;
    `;
    return <CategoryTitleText {...props}>{text}</CategoryTitleText>;
};

// const WrapperBig = styled.div`
//     padding: 20px;
// `;
