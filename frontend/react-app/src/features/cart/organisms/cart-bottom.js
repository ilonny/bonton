import React from 'react';
import styled from "styled-components";
import { Row } from "../../styled-components-layout";
import { HoverButton } from "../../common";
import { Color, Media } from "../../../lib";
export const CartBottom = props => {
    const { cart, setCartState } = props;
    return (
        <Wrapper>
            <Row justify="space-between" align="center" tablet_wrap="true" className="cart-bottom">
                <div className="delivery">
                    {cart.total_price < 5000 && <p className="first">Доставка: <span>+400 руб.</span></p>}
                    <p className="second">Бесплатная доставка от 5000 руб.</p>
                </div>
                <div className="total-wrapper">
                    <p>Итого: <span>{cart.total_price >= 5000 ? `${cart.total_price} руб` : `${cart.total_price + 400} руб`}</span></p>
                </div>
                <div>
                    <HoverButton
                        onClick={() => {setCartState('form')}}
                        maxWidth={"372px"}
                        color={"white"}
                        backgroundColor={Color.red}
                        hoverBackgroundColor={Color.red_hover}
                        fontSize="18px"
                        hoverColor={"white"}
                    >{'Оформить заказ'}</HoverButton>
                </div>
            </Row>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & .cart-bottom{
        margin-top: 15px;
        text-align: left;
    }
    & .total-wrapper {
        font-weight: 500;
        font-size: 18px;
        & span {
            color: ${Color.red};
        }
    }
    & .delivery{
        font-size: 18px;
        & .first {
            span {
                color: ${Color.red};
            }
        }
        & .second {
            color: #717171
        }
    }
    ${Media.mobile} {
        & .cart-bottom > div {
            flex: 1 1 100%;
            margin-bottom: 15px;
        }
    }
`