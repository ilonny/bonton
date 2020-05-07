import React from "react";
import styled from "styled-components";
import { CategoryTitle } from "../atoms/category-title";
import { Icon } from "../../common";
import { Color } from "../../../lib";
import { ReactComponent as ArrowDown } from "../../../assets/icons/arrow_down.svg";
export const MenuCategory = (props) => {
    const { type } = props;
    let padding, hover;
    switch (type) {
        case "first":
            padding = "20px";
            hover = `
                &:hover {
                    background: ${Color.black};
                    p {
                        color: #fff;
                    },
                    svg, path {
                        fill: #fff !important;
                        color: #fff;
                    }
                }
            `;
            break;
        case "second":
            padding = "10px";
            break;
        case "third":
            padding = "5px";
            break;
        default:
            break;
    }
    return (
        <MenuCategoryWrapper padding={padding} hover={hover}>
            <CategoryTitle {...props} />
            <ArrowDown />
            {/* <Icon
                name="arrow_down"
                type="simple"
                width={13}
                height={13}
                sourceType="svg"
            /> */}
        </MenuCategoryWrapper>
    );
};

const MenuCategoryWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    transition: all 250ms ease;
    padding: ${(props) => props.padding};
    ${(props) => props.hover}
`;
