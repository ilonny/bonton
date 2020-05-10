import React from "react";
import { FooterWrapper } from "../atoms";
import { Container } from "../../common/templates";
import { Row } from "../../styled-components-layout";
import { LogoCol } from "../organisms/logo-col";
import { MenuCol } from "../organisms/menu-col";
import { ContactsCol } from "../organisms/contacts-col";
export const Footer = () => (
    <FooterWrapper>
        <Container>
            <Row align="flex-start" tablet_wrap="true">
                <LogoCol />
                <MenuCol />
                <ContactsCol />
            </Row>
        </Container>
    </FooterWrapper>
);
