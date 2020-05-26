import styled from "styled-components";
import { Media } from "../../../lib";

export const Input = styled.input`
    border: 1px solid #c4c4c4;
    font-size: 20px;
    padding: 0px 30px;
    height: 50px;
    width: 372px;
    ${Media.tablet} {
        font-size: 18px;
        padding: 0px 15px;
        height: 40px;
        margin: 0;
        width: 100%;
        flex: 1 1 100%;
    }
`;


export const WrapperInput = styled.div`
// border: 1px solid #c4c4c4;
font-size: 20px;
padding: 0px 30px;
height: 50px;
width: 372px;
${Media.tablet} {
    font-size: 18px;
    padding: 0px 15px;
    height: 40px;
    margin: 0;
    width: 100%;
    flex: 1 1 100%;
}
`;