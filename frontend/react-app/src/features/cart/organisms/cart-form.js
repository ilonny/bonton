import React, { useState } from "react";
import styled from "styled-components";
import { Row } from "../../styled-components-layout";
import { Input, WrapperInput } from "../../subscribe-form/atoms"
import { HoverButton, CategoryTitle } from "../../common";
import { Media, Color, request } from "../../../lib";
import serialize from "form-serialize";

export const CartForm = props => {
    const { setCartState, cart } = props;
    const [message, setMessage] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        const data = serialize(e.target, { hash: true });
        if (!data.name || !data.phone) {
            setMessage('Необходимо заполнить имя и телефон')
            return false;
        }
        const dataText = `
            Имя: ${data.name}\n
            Телефон: ${data.phone}\n
            E-mail: ${data.email ? data.email : 'Не указано'}\n
            Промокод: ${data.promocode ? data.promocode : 'Не указано'}\n
            Адрес: ${data.address ? data.address : 'Не указано'}\n
            Самовывоз: ${data.self_delivery ? 'Да' : 'Нет'}\n
            Товары: ${props.cart.products.map(cart_product => {
            const data = props.products.find(el => el.id === cart_product.id);
            return `id: ${data.id} Название: ${data.name} Количество: ${cart_product.count} \n`;
        })}
        `
        request({
            method: 'POST',
            url: `send-mail`,
            data: {
                dataText: dataText,
                type: 'order'
            }
        }).then((response) => {
            console.log('res sendmail', response);
            setMessage(response.message);
            setTimeout(() => {
                setMessage('');
            }, 2000);
        });
    }
    console.log('check props', props)
    return (
        <Wrapper>
            <CategoryTitle>Оформление заказа</CategoryTitle>
            <form onSubmit={e => onSubmit(e)}>
                <Row gap="20px" tablet_wrap="true">
                    <Input name="name" type="text" placeholder="Ваше имя" />
                    <Input name="phone" type="text" placeholder="Телефон" />
                    <Input name="email" type="email" placeholder="Ваш e-mail" />
                </Row>
                <Row gap="20px" className="addr_row" tablet_wrap="true">
                    <Input className="first" name="promocode" type="text" placeholder="Промокод (если есть)" />
                    <Input className="second" name="address" type="text" placeholder="Адрес доставки" />
                    <WrapperInput>
                        <LabelWrapper>
                            <Input type="checkbox" placeholder="Заберу сам" name="self_delivery" value="1" />
                            <span>Заберу сам</span>
                        </LabelWrapper>
                    </WrapperInput>
                </Row>
                <Row className="bottom" justify="space-between" align="center" tablet_wrap="true">
                    <button
                        onClick={() => { setCartState('precheck') }}
                        className="back"
                    >Вернуться в корзину</button>
                    <div className="total">Итого: <span>{cart.total_price < 5000 ? cart.total_price + 400 : cart.total_price}</span> руб</div>
                    <HoverButton
                        onClick={() => { }}
                        maxWidth={"372px"}
                        color={"white"}
                        backgroundColor={Color.red}
                        hoverBackgroundColor={Color.red_hover}
                        fontSize="18px"
                        hoverColor={"white"}
                    >{'Оформить заказ'}</HoverButton>
                </Row>
                <div style={{ padding: '10px' }}>{message}</div>
            </form>
        </Wrapper >
    )
}

const Wrapper = styled.div`
    display: block;
    ${Media.tablet} {
        & input {
            flex: 1 1 100%;
            margin-left: 0 !important;
            margin-bottom: 10px;
        }
    }
    & .bottom {
        & .back {
            padding: 10px;
            cursor: pointer;
            font-size: 20px;
            color: #C4C4C4;
            &:hover {
                text-decoration: underline;
            }
        }
        & .total {
            padding: 10px;
            font-size: 20px;
            & span {
                color: ${Color.red};
            }
        }
    }
`
const LabelWrapper = styled.label`
    position: relative;
    display: flex;
    align-items: center;
    & input {
        width: auto;
        border: none;
        margin-right: 10px;
    }
    ${Media.tablet} {
        margin-left: -20px;
        & input {
            width: 15px;
            height: 15px;
            flex: 1 1 15px;
            max-width: 15px;
            margin-bottom: 0px !Important;
        }
    }
    // & span {
    //     position: absolute;
    //     left: 27px;
    //     top: 16px;
    // }
`