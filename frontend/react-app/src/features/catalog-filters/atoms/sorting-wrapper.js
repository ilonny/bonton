/* eslint-disable */
import styled from "styled-components";
import { Color } from "../../../lib"
export const SortingWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    min-width: 65px;
    ${props => props.value != 0 && `
        & span {
            color: ${Color.red};
        }
        & svg, & rect, & path {
            fill: ${Color.red};
        }
    `}
    ${props => props.value === 'up' && `
        & svg {
            transform: rotate(180deg);
        }
    `}
`