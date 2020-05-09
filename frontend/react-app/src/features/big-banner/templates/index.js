import React from "react";
import styled from "styled-components";
import { Block } from "../organisms/block";
import { ImageView, Gradient } from "../../common";
const data = [
    {
        image: require("../../../assets/images/big-banner-men.png"),
        btnText: "Мужчинам",
    },
    {
        image: require("../../../assets/images/big-banner-women.png"),
        btnText: "Женщинам",
    },
];
export const BigBanner = () => (
    <BigBannerWrapper>
        {data.map((block) => (
            <Block>
                <ImageView src={block.image} />
                <BlockAbsoluteContentWrapper>
                    <Gradient absoluteView={true} dark={true} />
                    
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
`;

const BlockAbsoluteContentWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;
