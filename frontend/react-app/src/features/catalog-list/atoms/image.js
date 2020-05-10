import styled from "styled-components";
import {WithTag} from "../../styled-components-layout"
export const Image = styled(WithTag)`
    background: url(${(props) => props.src});
    background-size: cover;
    width: 100%;
    max-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 250ms ease;
`;
