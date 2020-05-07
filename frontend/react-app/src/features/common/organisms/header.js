import React from "react";
import styled from "styled-components";
import { vk_link, ig_link } from "../../../lib";
import { Container } from "../templates/container";
import { HeaderDelivery } from "./headerDelivery";
import { MenuButton } from "../atoms/menu-button";
import { Icon } from "../atoms/icon";
export const Header = () => (
    <>
        <HeaderDelivery />
        <HeaderContent>
            <Container style={containerStyles}>
                <HeaderLeft>
                    <MenuButton />
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
                </HeaderLeft>
            </Container>
        </HeaderContent>
    </>
);

const HeaderContent = styled.div`
    padding: 30px 0px 30px 0px;
    border-bottom: 1px solid rgb(228, 228, 228);
`;
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
`;

const containerStyles = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;
`;

const SocialLink = styled.a`
    margin: 0 6px;
`;
