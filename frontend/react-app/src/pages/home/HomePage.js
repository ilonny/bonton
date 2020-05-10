import React from "react";
import { HomeTemplate, CategoryTitle, Spacer } from "../../features/common";
import { Banner } from "../../features/banner";
import { HomePageAdvantage } from "../../features/homepage-advantage";
import { CatalogList } from "../../features/catalog-list";
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
        <CatalogList data={pageData.catalogList}/>
    </HomeTemplate>
);
