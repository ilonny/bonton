import React from "react";
import styled from "styled-components";
import { Row } from "../../styled-components-layout";
import { Media, Color } from "../../../lib";
import ImgNotFound from "../../../assets/icons/image_not_found.png"
export const CartProduct = props => {
    const { product, addToCart, removeFromCart } = props;
    console.log('cart product', product)
    return (
        <ProductWrapper>
            <Row justify="space-between" align="center" tablet_wrap="true">
                <Row justify="flex-start" align="center" tablet_wrap="true">
                    <ImageWrapper><img src={product.image ? product.image : ImgNotFound} alt={product.title} /></ImageWrapper>
                    <ProductInfo>
                        <p>{product.title}</p>
                        <span>{product.price} руб.</span>
                    </ProductInfo>
                </Row>
                <ProductButtons>
                    <button onClick={() => removeFromCart(product.id)}>-</button>
                    <span>{product.count}</span>
                    <button onClick={() => addToCart(product.id)}>+</button>
                </ProductButtons>
            </Row>
        </ProductWrapper>
    )
}


const ProductWrapper = styled.div`
    transition: all 250ms ease;
    width: 100%;
    &:hover {
        background: #F2F2F2;
        box-shadow: 0px 4px 35px rgba(0, 0, 0, 0.05);
    }
`
const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 130px;
    & img {
        display: block;
        max-width: 100%;
    }
    ${Media.mobile} {
        flex: 1 1 50%;
    }
`

const ProductInfo = styled.div`
    padding: 15px;
    text-align: left;
    & p {
        font-size: 20px;
        text-decoration: underline;
    }
    & span {
        display: block;
        color: ${Color.red};
        margin-top: 20px;
    }
    ${Media.mobile} {
        flex: 1 1 50%;
    }
`

const ProductButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
    & button {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #e4e4e4;
        font-size: 24px;
        transition: all 250ms ease;
        line-height: 0;
        &:hover {
            cursor: pointer;
            background: ${Color.red};
            color: #fff;
        }
    }
    & span {
        margin: 0 30px;
    }
    ${Media.mobile} {
        flex: 1 1 100%;
        padding: 15px;
        justify-content: center;
    }
`