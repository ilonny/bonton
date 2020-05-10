import styled from "styled-components";
import { Color, Media } from "../../../lib";
export const Button = styled.button`
    width: 372px;
    height: 50px;
    background: ${Color.red};
    font-size: 20px;
    color: #fff;
    margin-left: 30px;
    ${Media.tablet} {
        font-size: 18px;
        height: 40px;
        margin: 0;
        width: 100%;
        flex: 1 1 100%;
        margin-top: 15px;
    }
`;
