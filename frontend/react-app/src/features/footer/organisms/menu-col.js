import React from "react";
import styled from "styled-components";
import { ColTitle } from "../atoms";
// import { LinkStyled } from "../../homepage-about/atoms";
import { Row } from "../../styled-components-layout";
import { Media } from "../../../lib";
export const MenuCol = () => (
    <MenuColStyled>
        <ColTitle>Меню</ColTitle>
        <div>
            <Row>
                <FirstCol>
                    <LinkStyled href="/">Мужчинам</LinkStyled>
                    <LinkStyled href="/">Женщинам</LinkStyled>
                    <LinkStyled href="/">Доставка</LinkStyled>
                    <LinkStyled href="/">Возврат</LinkStyled>
                </FirstCol>
                <div>
                    <LinkStyled href="/">Чем мы можем помочь</LinkStyled>
                    <LinkStyled href="/">Карта сайта</LinkStyled>
                    <LinkStyled href="/">О нас</LinkStyled>
                    <LinkStyled href="/">FAQ</LinkStyled>
                </div>
            </Row>
        </div>
    </MenuColStyled>
);

const MenuColStyled = styled.div`
    flex: 1 1 100%;
    ${Media.tablet} {
        flex: 1 1 50%;
    }
    ${Media.mobile} {
        flex: 1 1 100%;
    }
`;
const LinkStyled = styled.a`
    font-size: 18px;
    line-height: 23px;
    display: block;
    margin-bottom: 10px;
`;

const FirstCol = styled.div`
    margin-right: 50px;
`;
