import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import {
    BlockWrapper,
    ImageWrapper,
    Image,
    Title,
    CartButton,
    Price,
} from "../atoms";
import { Row } from "../../styled-components-layout";
export const Block = ({ item, addToCart, removeFromCart, cart_products }) => {
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const active = !!cart_products.find(product => product.id === item.id)
    const onClickHandler = (product_id) => {
        console.log('onClick', product_id)
        if (active) {
            removeFromCart(product_id)
        } else {
            addToCart(product_id)
        }
        forceUpdate();
    }
    console.log('cart_products', cart_products);
    console.log('active')
    return (
        <BlockWrapper>
            <Link to={`/product/${item.id}`}>
                <ImageWrapper>
                    <img
                        src={item.image_hover}
                        style={{ opacity: 0, maxWidth: "100%" }}
                        alt={item.title}
                    />
                    <Image src={item.image_hover} />
                    <Image hover_hide="true" src={item.image} />
                </ImageWrapper>
                <Title>{item.title}</Title>
            </Link>
            <div>
                <Row align="center" mobile_wrap="true">
                    <CartButton
                        onClick={() => onClickHandler(item.id)}
                        active={active}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        cart_products={cart_products}
                    />
                    <Price>{item.price}</Price>
                </Row>
            </div>
        </BlockWrapper>
    )
}
