import React from "react";
import {
    HomeTemplate,
    CategoryTitle,
    Spacer,
    // HoverButton,
} from "../../features/common";
// import { Row } from "../../features/styled-components-layout";
import { CatalogList } from "../../features/catalog-list";
import { SubscribeForm } from "../../features/subscribe-form";
// import { Color } from "../../lib";
import { pageData } from "../home/data";
export const CatalogPage = props => {
    console.log('props', props);
    return (
        <HomeTemplate>
            <Spacer />
            <CategoryTitle>Каталог</CategoryTitle>
            <CatalogList data={pageData.catalogList} />
            <Spacer />
            <SubscribeForm />
            <Spacer />
        </HomeTemplate>
    );
};
