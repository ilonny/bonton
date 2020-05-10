import React from "react";
import styled from "styled-components";
import { ImageView } from "../../common";
import { Media } from "../../../lib";
export const LogoCol = () => (
    <LogoColStyled>
        <ImageView
            src={require("../../../assets/images/logo_big.png")}
            className="logo"
        />
        <p class="title">
            Магазин стильной
            <br />
            одежды в Сургуте
        </p>
        <p class="copy gray-text">© BONTON 2020 </p>
        <a class="copy link gray-text" href="/">
            Политика конфиденциальности
        </a>
    </LogoColStyled>
);

const LogoColStyled = styled.div`
    flex: 1 1 100%;
    & .logo {
        max-width: 118px;
        max-height: 52px;
    }
    & .title {
        font-size: 18px;
        line-height: 23px;
        margin-top: 20px;
        margin-bottom: 45px;
    }
    & .copy {
        font-size: 18px;
        line-height: 23px;
        margin-top: 20px;
        color: rgb(146, 146, 146);
    }
    ${Media.tablet} {
        order: 3;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        & img {
            flex-shrink: 0;
        }
        & .title {
            margin-bottom: 0px;
        }
    }
`;
