import React from "react";
import styled from "styled-components";
import { CategoryTitle } from "../atoms/category-title";
import { Color } from "../../../lib";
import { ReactComponent as ArrowDown } from "../../../assets/icons/arrow_down.svg";
export const MenuCategory = (props) => {
    const { type, opened } = props;
    let paddingHorizontal, paddingVertical, hover, activeStyles, borderBottom;
    switch (type) {
        case "first":
            paddingHorizontal = "0px 20px";
            paddingVertical = "20px 0px";
            borderBottom = `2px solid ${Color.black}`;
            activeStyles = `background: ${Color.black};
            p {
                color: #fff;
            },
            svg, path {
                fill: #fff !important;
                color: #fff;
            }`;
            hover = `
                &:hover {${activeStyles}}
            `;
            break;
        case "second":
            // padding = "10px 20px";
            break;
        case "third":
            // padding = "5px";
            break;
        default:
            break;
    }
    return (
        <MenuCategoryWrapper
            paddingHorizontal={paddingHorizontal}
            hover={hover}
            opened={opened}
            activeStyles={activeStyles}
        >
            <MenuCategoryWrapperInner
                borderBottom={borderBottom}
                paddingVertical={paddingVertical}
            >
                <CategoryTitle {...props} />
                <SvgWrapper {...props}>
                    <ArrowDown />
                </SvgWrapper>
            </MenuCategoryWrapperInner>
        </MenuCategoryWrapper>
    );
};

const MenuCategoryWrapper = styled.div`
    cursor: pointer;
    transition: all 250ms ease;
    padding: ${(props) => props.paddingHorizontal};
    ${(props) => props.opened && props.activeStyles};
    ${(props) => props.hover}
`;
const MenuCategoryWrapperInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.paddingVertical};
    border-bottom: ${(props) => props.borderBottom};
`;
const SvgWrapper = styled.div`
    transition: all 250ms ease;
    transform: rotate(90deg);
    ${(props) => props.opened && `transform: rotate(0deg)`};
`;
