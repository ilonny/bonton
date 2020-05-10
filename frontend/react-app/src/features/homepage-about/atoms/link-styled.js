import styled from "styled-components";
import { Color } from "../../../lib";
export const LinkStyled = styled.a`
    color: ${Color.red};
    text-decoration: underline;
    font-size: 18px;
    margin-top: 20px;
    display: block;
    &:hover {
        text-decoration: none;
    }
`;
