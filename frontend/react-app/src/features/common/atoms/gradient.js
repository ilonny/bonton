import React from "react";
import styled from "styled-components";

export const Gradient = (props) => <GradientStyled {...props} />;

const GradientStyled = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background: linear-gradient(transparent 50%, black);
`;
// const GradientStyled = styled.div`
//     ${props.absoluteView && props.dark
//         ? `

//     `
//         : `
//         height: ${(props) => props.height};
//         width: ${(props) => props.width};
//         top: ${(props) => props.top};
//         left: ${(props) => props.left};
//         right: ${(props) => props.right};
//         bottom: ${(props) => props.bottom};
//         position: ${(props) => props.position};
//         background: linear-gradient(${(props) =>
//             `${props.rotate}, ${props.firstColor} ${props.firstColorPercent}, ${props.secondColor} ${props.secondColorPercent}`});
//     `}
// `;
