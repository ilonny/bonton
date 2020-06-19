import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Icon } from "../../common/atoms";
import { HeaderDelivery } from "../atoms/headerDelivery";
import { Media, Color } from "../../../lib";
import { MenuTree } from "./menu-tree";

export const HeaderTemplateDektop = props => {
    const { cart, menu } = props;
    console.log('HeaderTemplateDektop props', props);
    return (
        <HeaderWrapper>
            <HeaderDelivery />
            <MainWrapper>
                <Link to="/">
                    <Icon
                        name="logo"
                        type="simple"
                        width={110}
                    />
                </Link>
                <LinksWrapper>
                    <LinkHoverWrapper>
                        <LinkHover>
                            <Link to={"/catalog?is_new=1"}>Новые поступления</Link>
                        </LinkHover>
                    </LinkHoverWrapper>
                    <LinkHoverWrapper>
                        <LinkHover>
                            <Link to={"/catalog?type=men"}>Для мужчин</Link>
                        </LinkHover>
                        <LinkHoverContent>
                            {props.menu && <MenuTree menu={menu[0].children} />}
                        </LinkHoverContent>
                    </LinkHoverWrapper>
                    <LinkHoverWrapper>
                        <LinkHover>
                            <Link to={"/catalog?type=women"}>Для женщин</Link>
                        </LinkHover>
                        <LinkHoverContent>
                            {props.menu && <MenuTree menu={menu[1].children ? menu[1].children : []} />}
                        </LinkHoverContent>
                    </LinkHoverWrapper>
                    <LinkHoverWrapper>
                        <LinkHover>
                            <Link to={"/catalog?is_popular=1"}>Популярное</Link>
                        </LinkHover>
                    </LinkHoverWrapper>
                </LinksWrapper>
                <Link to={"/cart"}>
                    <CartLink>
                        <CartLinkSpan>В корзине: &nbsp;</CartLinkSpan>
                        <CartLinkSpanGray>{cart.products.length} товаров на {cart.total_price} руб.</CartLinkSpanGray>
                        <Icon
                            name="cart"
                            width={17}
                            height={17}
                            color="white"
                            wrapperHeight={42}
                            wrapperWidth={42}
                            type="fill"
                        />
                    </CartLink>
                </Link>
            </MainWrapper>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
// position: fixed;
// width: 100%;
// left: 0;
// top: 0;
position: relative;
z-index: 10;
border-bottom: 1px solid #ccc;
`

const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 40px;
`;

const LinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


const CartLinkSpan = styled.span`
    color: ${Color.red};
    text-decoration: none;
    ${Media.tablet} {
        display: none;
    }
`;
const CartLinkSpanGray = styled.span`
    color: ${Color.gray};
    margin-right: 20px;
    text-decoration: underline;
    ${Media.tablet} {
        display: none;
    }
`;

const CartLink = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    &:hover ${CartLinkSpanGray} {
        text-decoration: none;
    }
    ${Media.tablet} {
        flex-direction: column;
        align-items: flex-end;
    }
`;


const LinkHover = styled.div`
    padding: 10px 50px;
    & a {
        text-transform: uppercase;
        font-weight: 600;
    }
`

const LinkHoverContent = styled.div`
    position: absolute;
    top: 100%;
    background: #fff;
    padding: 30px;
    max-width: 980px;
    margin: 0 auto;
    left: 50%;
    margin-left: -566px;
    margin-top: -30px;
    padding-top: 50px;
`

const LinkHoverWrapper = styled.div`
    // position: relative;
    & ${LinkHoverContent} {
        display: none;
    }
    &:hover {
        & ${LinkHoverContent} {
            display: block;
        }   
    }
`