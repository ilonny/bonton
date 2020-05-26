import React from "react";
import styled from "styled-components";
import { CategoryTitle, HoverButton } from "../../common";
import { Media, Color } from "../../../lib";
import { Row } from "../../styled-components-layout";
export const ProductInfo = props => {
    if (props.data) {
        const { data } = props;
        return (
            <InfoWrapper>
                <CategoryTitle>{data.title}</CategoryTitle>
                <p>{data.description}</p>
                {data.options && (
                    <Row justify="space-between" align="center" wrap="wrap">
                        {data.options.map(option => (
                            <SelectWrapper key={option.title}>
                                <label>{option.title}</label>
                                <select>
                                    {option.items.map(item => (
                                        <option value={item.value} key={item.label}>{item.label}</option>
                                    ))}
                                </select>
                            </SelectWrapper>
                        ))}
                    </Row>
                )}
                <Row justify="space-between" align="center" wrap="wrap">
                    <ProductPrice>{data.price}</ProductPrice>
                    <HoverButton
                        maxWidth={"372px"}
                        color={"white"}
                        backgroundColor={Color.red}
                        hoverBackgroundColor={Color.red_hover}
                        fontSize="18px"
                        hoverColor={"white"}
                    >В корзину</HoverButton>
                </Row>
            </InfoWrapper>
        )
    }
    return null;
}

const InfoWrapper = styled.div`
    flex: 1 1 100%;
    padding-left: 20px;
    ${Media.tablet} {
        padding: 0;
    }
`
const SelectWrapper = styled.div`
    flex: 1 1 50%;
    max-width: 50%;
    text-align: left;
    padding: 5px;
    ${Media.tablet} {
        flex: 1 1 100%;
        max-width: 100%;
    }
    & label, & select {
        display: block;
        width: 100%;
    }
    & label {
        color: ${Color.red};
        margin-bottom: 5px;
    }
    & select {
        height: 40px;
        cursor: pointer;
    }
`


const ProductPrice = styled.p`
    font-weight: 500;
    color: ${Color.red};
    font-size: 20px;
`