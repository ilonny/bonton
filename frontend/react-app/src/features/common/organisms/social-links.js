import React from "react";
import styled from "styled-components";
import { vk_link, ig_link } from "../../../lib";
import { Icon } from "../../common/atoms";

export const SocialLinks = () => (
    <IconsWrapper>
        <SocialLink href={vk_link} target="_blank">
            <Icon
                name="VK"
                width={16}
                height={10}
                wrapperWidth={"30"}
                wrapperHeight={30}
            />
        </SocialLink>
        <SocialLink href={ig_link} target="_blank">
            <Icon
                name="IG"
                width={13}
                height={13}
                wrapperWidth={"30"}
                wrapperHeight={30}
            />
        </SocialLink>
    </IconsWrapper>
);

const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const SocialLink = styled.a`
    margin: 0 6px;
`;
