import styled from "styled-components";
import { Color } from "../../../lib";
export const FilterSelectItem = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #717171;
    width: 100%;
    cursor: pointer;
    transition: all 250ms ease;
    padding: 5px 0;
    & img {
        margin-left: 5px;
    }
    ${(props) =>
        props.active &&
        `
        padding-left: 10px;
        font-weight: 500;
        color: ${Color.black};
    `}
`;
