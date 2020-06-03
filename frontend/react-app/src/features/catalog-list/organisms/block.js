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
import ImgNotFound from "../../../assets/icons/image_not_found.png"
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
    return (
        <BlockWrapper>
            <Link to={`/product/${item.id}`}>
                <ImageWrapper>
                    {item.image ? (
                        <>
                            <img
                                src={encodeURI(item.image_hover)}
                                style={{ opacity: 0, maxWidth: "100%", maxHeight: '420px' }}
                                alt={item.title}
                            />
                            <Image src={encodeURI(item.image_hover)} />
                            <Image hover_hide="true" src={encodeURI(item.image)} />
                        </>
                    ) : (
                            <img src={ImgNotFound} alt="Изображение отсутствует" style={{ maxWidth: "100%", maxHeight: '420px' }} />
                        )}
                </ImageWrapper>
                <Title>{item.name}</Title>
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
                    <Price isNewPrice={!!item.new_price}>{item.price} руб.</Price>
                    {!!item.new_price && (<Price isBold>{item.new_price} руб.</Price>)}
                </Row>
            </div>
        </BlockWrapper>
    )
}
