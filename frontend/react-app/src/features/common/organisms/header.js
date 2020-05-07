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
            <Container
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
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
                <a href="/">
                    <Icon name="logo" type="simple" width={120} height={54} />
                </a>
                <a href="/">
                    
                </a>
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

const IconsWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;
`;

const SocialLink = styled.a`
    margin: 0 6px;
`;
