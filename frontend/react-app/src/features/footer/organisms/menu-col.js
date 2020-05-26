import React from "react";
import styled from "styled-components";
import { ColTitle } from "../atoms";
// import { LinkStyled } from "../../homepage-about/atoms";
import { Row } from "../../styled-components-layout";
import { Media } from "../../../lib";
import { Link } from "react-router-dom";
export const MenuCol = () => (
    <MenuColStyled>
        <ColTitle>Меню</ColTitle>
        <div>
            <Row>
                <FirstCol>
                    <LinkStyled href="/">Мужчинам</LinkStyled>
                    <LinkStyled href="/">Женщинам</LinkStyled>
                    <Link to="/delivery">
                        <LinkStyled>Доставка</LinkStyled>
                    </Link>
                    <Link to="/delivery">
                        <LinkStyled>Возврат</LinkStyled>
                    </Link>
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
const LinkStyled = styled.span`
    font-size: 18px;
    line-height: 23px;
    display: block;
    margin-bottom: 10px;
`;

const FirstCol = styled.div`
    margin-right: 50px;
`;
