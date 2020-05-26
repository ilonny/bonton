import React from "react";
import styled from "styled-components";
import { ReactComponent as CartSvg } from "../../../assets/icons/cart.svg";
import { Color, Media } from "../../../lib";
export const CartButton = (props) => (
    <ButtonStyled {...props}>
        {!props.active && <CartSvg />}
        <p>{props.active ? "В корзине" : "В корзину"}</p>
    </ButtonStyled>
);

const activeStyles = `
    background: ${Color.red};
    color: #fff;
`;
const ButtonStyled = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 250ms ease;
    background: ${Color.light_gray};
    width: 140px;
    height: 35px;
    cursor: pointer;
    margin-right: 20px;
    & svg,
    & path {
        fill: ${Color.black};
        color: ${Color.black};
        margin-right: 5px;
    }
    &:hover {
        ${activeStyles}
        & svg, & path {
            fill: #fff;
            color: #fff;
        }
    }
    ${Media.tablet} {
        width: 120px;
        margin-right: 10px;
    }
    ${Media.mobile} {
        width: 100%;
        flex: 1 1 100%;
        order: 2;
        margin: 0;
    }
`;
