import React from "react";
import styled from "styled-components";
import { Block } from "../organisms/block";
import { ImageView, Gradient, HoverButton } from "../../common";
import { Media } from "../../../lib";
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
export const BigBanner = () => (
    <BigBannerWrapper>
        {data.map((block) => (
            <Block key={block.btnText}>
                <ImageView src={block.image} />
                <BlockAbsoluteContentWrapper>
                    <Gradient absoluteView={true} dark={true} />
                    <HoverButton color="#fff" backgroundColor="transparent">{block.btnText}</HoverButton>
                </BlockAbsoluteContentWrapper>
            </Block>
        ))}
    </BigBannerWrapper>
);

const BigBannerWrapper = styled.div`
    padding: 1px;
    margin: 30px 0;
    display: flex;
    flex: 1;
    align-items: stretch;
    justify-content: stretch;
    ${Media.mobile} {
        flex-wrap: wrap;
        margin: 10px 0;
    }
`;

const BlockAbsoluteContentWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 100px 120px 100px;
    ${Media.smallDesktop} {
        padding: 70px;
    }
    ${Media.tablet} {
        padding: 30px;
    }
`;
