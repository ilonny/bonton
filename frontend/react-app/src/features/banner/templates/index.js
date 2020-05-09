import React from "react";
import styled from "styled-components";
import { Block } from "../organisms/block";
import { BigBannerWrapper } from "../organisms/big-banner-wrapper";
import { BlockAbsoluteContentWrapper } from "../organisms/block-absolute-content-wrapper";
import { CategoryName } from "../organisms/category-name";
import { ImageView, Gradient, HoverButton } from "../../common";
import { Row } from "../../styled-components-layout";
import {Media} from "../../../lib";
const data = [
    {
        image: require("../../../assets/images/big-banner-men.png"),
        btnText: "МУЖЧИНАМ",
    },
    {
        image: require("../../../assets/images/big-banner-women.png"),
        btnText: "ЖЕНЩИНАМ",
    },
];
const dataSmall1 = [
    {
        image: require("../../../assets/images/small_banner_1.png"),
        btnText: "Мужская обувь",
    },
    {
        image: require("../../../assets/images/small_banner_2.png"),
        btnText: "Женская обувь",
    },
];
export const BigBanner = () => (
    <>
        <BigBannerWrapper>
            {data.map((block) => (
                <Block key={block.btnText} gap={true}>
                    <ImageView src={block.image} />
                    <BlockAbsoluteContentWrapper>
                        <Gradient absoluteView={true} dark={true} />
                        <HoverButton color="#fff" backgroundColor="transparent">
                            {block.btnText}
                        </HoverButton>
                    </BlockAbsoluteContentWrapper>
                </Block>
            ))}
        </BigBannerWrapper>
        <Row align="center" gap="20px" mobileWrap>
            {dataSmall1.map((block) => (
                <LinkStyled href="/">
                    <Block key={block.btnText}>
                        <ImageView src={block.image} />
                        <BlockAbsoluteContentWrapper small={true}>
                            <Gradient
                                absoluteView={true}
                                dark={true}
                                percent="0%"
                            />
                            <CategoryName name={block.btnText} />
                        </BlockAbsoluteContentWrapper>
                    </Block>
                </LinkStyled>
            ))}
        </Row>
    </>
);

const LinkStyled = styled.a`
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
