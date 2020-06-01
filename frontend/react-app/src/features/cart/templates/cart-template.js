import React, { useEffect, useState } from "react";
import { Row } from "../../styled-components-layout";
import { CartProduct, CartBottom, CartForm } from "../organisms";
import { CategoryTitle } from "../../common";
import { Link } from "react-router-dom";
import "./styles.scss";
export const CartTemplate = props => {
    console.log('Cart props', props);
    const [cartState, setCartState] = useState('precheck');
    // const { id, getCurrentProduct } = props;
    const { getCurrentProduct, cart, products } = props;
    const cartProducts = cart.products;
    const cartProductsIds = cartProducts.map(item => item.id);
    useEffect(() => {
        getCurrentProduct(cartProducts.map(item => item.id));
    }, [getCurrentProduct, cartProducts])
    const cart_products = cartProductsIds.map((id, index) => {
        const data = products.find(product => product.id === id);
        return {
            count: cartProducts[index].count,
            ...data
        }
    })
    // const cart_products = products.filter(item => cartProductsIds.includes(item.id));
    // console.log('cart_products', cart_products);
    if (cart_products.length) {
        if (cartState === 'precheck') {
            return (
                <div>
                    <CategoryTitle>Ваша корзина</CategoryTitle>
                    {cart_products.map((product, index) => (
                        <Row justify="flex-start" align="flex-start" tablet_wrap="true" key={index} >
                            <CartProduct product={product} {...props} />
                        </Row>
                    ))}
                    <CartBottom {...props} setCartState={setCartState} />
                </div>
            )
        }
        if (cartState === 'form') {
            return <CartForm {...props} setCartState={setCartState}/>
        }
    } else {
        return (
            <>
                <CategoryTitle>Корзина пуста</CategoryTitle>
                <div>
                    <Link to={'/'}>На главную</Link>
                </div>
            </>
        )
    }
}