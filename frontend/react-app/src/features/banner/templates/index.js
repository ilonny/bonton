import React from "react";
import styled from "styled-components";
import { Block } from "../organisms/block";
import { BigBannerWrapper } from "../organisms/big-banner-wrapper";
import { BlockAbsoluteContentWrapper } from "../organisms/block-absolute-content-wrapper";
import { CategoryName } from "../organisms/category-name";
import { ImageView, Gradient, HoverButton } from "../../common";
import { Row } from "../../styled-components-layout";
import { Media } from "../../../lib";
import { Link } from "react-router-dom";
export const Banner = (props) => {
    let subarray, array, size;
    if (props.small) {
        array = props.data; //массив, можно использовать массив объектов
        size = props.colSize || 2; //размер подмассива
        subarray = []; //массив в который будет выведен результат.
        for (let i = 0; i < Math.ceil(array.length / size); i++) {
            subarray[i] = array.slice(i * size, i * size + size);
        }
    }
    return (
        <>
            {!props.small ? (
                <BigBannerWrapper>
                    {props.data.map((block) => (
                        <Block key={block.btnText} gap={true}>
                            <ImageView src={block.image} />
                            <BlockAbsoluteContentWrapper>
                                <Gradient absoluteView={true} dark={true} />
                                <Link to={block.href}>
                                    <HoverButton
                                        color="#fff"
                                        backgroundColor="transparent"
                                    >
                                        {block.btnText}
                                    </HoverButton>
                                </Link>
                            </BlockAbsoluteContentWrapper>
                        </Block>
                    ))}
                </BigBannerWrapper>
            ) : (
                    <>
                        {subarray.map((row, index) => (
                            <Row
                                align="center"
                                gap={"20px"}
                                mobile_wrap="true"
                                key={row[index].btnText}
                            >
                                {row.map((block) => (
                                    <LinkStyled
                                        key={block.btnText}
                                        multiline={true}
                                        flex={props.multiline ? "1 1 50%" : "1"}
                                    >
                                        <Link to="/">
                                            <Block key={block.btnText}>
                                                <ImageView src={block.image} />
                                                <BlockAbsoluteContentWrapper
                                                    small={true}
                                                >
                                                    <Gradient
                                                        absoluteView={true}
                                                        dark={true}
                                                        percent="0%"
                                                    />
                                                    <CategoryName
                                                        name={block.btnText}
                                                    />
                                                </BlockAbsoluteContentWrapper>
                                            </Block>
                                        </Link>
                                    </LinkStyled>
                                ))}
                            </Row>
                        ))}
                    </>
                )}
        </>
    );
};

const LinkStyled = styled.div`
    display: block;
    &:hover [data-gradient="true"] {
        background: linear-gradient(transparent 50%, black);
    }
    &:hover span {
        text-decoration: none;
    }
    ${Media.mobile} {
        margin-left: 0 !important;
        &:not(:first-child) {
            margin-top: 30px;
        }
    }
`;
