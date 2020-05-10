import React from "react";
import {
    HomeTemplate,
    CategoryTitle,
    Spacer,
    HoverButton,
} from "../../features/common";
import { Banner } from "../../features/banner";
import { Row } from "../../features/styled-components-layout";
import { HomePageAdvantage } from "../../features/homepage-advantage";
import { CatalogList } from "../../features/catalog-list";
import {HomePageAbout} from "../../features/homepage-about";
import { Color } from "../../lib";
import { pageData } from "./data";
export const HomePage = () => (
    <HomeTemplate>
        <Banner data={pageData.big} />
        <Banner data={pageData.small1} small={true} />
        <Spacer />
        <CategoryTitle>Аксессуары</CategoryTitle>
        <section id="accessories">
            <Banner data={pageData.accessories} small={true} multiline={true} />
        </section>
        <HomePageAdvantage />
        <CategoryTitle>Популярное</CategoryTitle>
        <CatalogList data={pageData.catalogList} />
        <Row justify="center" align="center">
            <HoverButton
                maxWidth={"372px"}
                color={Color.red}
                backgroundColor={"transparent"}
                hoverColor={"white"}
            >
                Перейти в каталог
            </HoverButton>
        </Row>
        <Spacer />
        <HomePageAbout/>
        <Spacer />
    </HomeTemplate>
);
