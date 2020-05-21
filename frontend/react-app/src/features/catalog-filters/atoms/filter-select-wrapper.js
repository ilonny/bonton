import styled from "styled-components";
import { Color, Media } from "../../../lib";
export const FilterSelectWrapper = styled.div`
    border-bottom: 1px solid #717171;
    flex: 1;
    max-width: 372px;
    position: relative;
    z-index: ${props => props.active ? '3' : '1'};
    margin-right: 10px;
    & svg {
        width: 10px;
        transition: all 250ms ease;
    }
    & .titleWrapper {
        padding: 10px;
        cursor: pointer;
        transition: all 250ms ease;
        position: relative;
        z-index: 2;
    }
    & .filter-select-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        width: 100%;
        position: absolute;
        top: 100%;
        background: #fff;
        border: 2px solid ${Color.black};
    }
    ${(props) =>
        props.active &&
        `
    & .titleWrapper {
        background: ${Color.black};
        & span {
            color: #fff;
        }
        & svg {
            transform: rotate(180deg);
        }
        & svg, & path {
            fill: #fff;
        }
    }
    `}
    ${(props) =>
        props.type === "filters" &&
        `
        & .filter-select-content {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }
        & .filter-item {
            flex: 1;
            flex: 1 1 50%;
            &:not(:last-child) {
                margin-bottom: 15px;
            }
            &__name {
                font-weight: 500;
                text-align: left;
                display: block;
            }
        }
    `}
    ${Media.mobile} {
        margin-right: 0;
        margin-bottom: 10px;
        flex: 1 1 100%;
    }
`;
