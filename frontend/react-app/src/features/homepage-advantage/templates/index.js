import React from "react";
import styled from "styled-components";
import { Icon } from "../../common";
import { Media } from "../../../lib";
export const HomePageAdvantage = (props) => (
    <Wrapper>
        <IconWrapper>
            <IconWrapperText>
                Бесплатная доставка
                <br />
                от 5000 рублей
            </IconWrapperText>
            <Spacer />
            <Icon name="homepage_advantage_1" type="simple" />
        </IconWrapper>
        <Divider />
        <IconWrapper>
            <Icon name="homepage_advantage_2" type="simple" />
            <Spacer />
            <IconWrapperText>
                Оплата товара
                <br />
                после примерки
            </IconWrapperText>
        </IconWrapper>
    </Wrapper>
);

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
    ${Media.smallDesktop} {
        margin: 50px 0;
    }
    ${Media.mobile} {
        margin: 30px 0;
        flex-wrap: wrap;
    }
`;
const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
    &:first-child {
        justify-content: flex-end;
        text-align: right;
    }
    ${Media.mobile} {
        flex: 1 1 100%;
        justify-content: center !important;
        &:first-child {
            margin-bottom: 15px;
        }
    }
`;
const IconWrapperText = styled.p`
    margin: 0;
    font-size: 26px;
    ${Media.tablet} {
        font-size: 18px;
    }
`;
const Divider = styled.div`
    width: 3px;
    height: 238px;
    background: #f2f2f2;
    margin: 0px 88px;
    ${Media.smallDesktop} {
        margin: 0px 60px;
        height: 200px;
    }
    ${Media.tablet} {
        margin: 0px 25px;
        height: 100px;
    }
    ${Media.mobile} {
        display: none;
    }
`;
const Spacer = styled.div`
    width: 36px;
    ${Media.tablet} {
        width: 15px;
    }
`;
