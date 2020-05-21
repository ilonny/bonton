import React from "react";
import {
    HomeTemplate,
    // CategoryTitle,
    Spacer,
    // HoverButton,
} from "../../features/common";
import { CatalogList } from "../../features/catalog-list";
import { SubscribeForm } from "../../features/subscribe-form";
import { CatalogTypeSelect } from "../../features/catalog-type-select";
import { CatalogFilters, CatalogPagination } from "../../features/catalog-filters";
import { pageData } from "../home/data";
export const CatalogPage = (props) => {
    // console.log("props", props);
    return (
        <HomeTemplate>
            <CatalogTypeSelect />
            <CatalogFilters {...props} />
            <CatalogList data={pageData.catalogList} />
            <CatalogPagination />
            <Spacer />
            <SubscribeForm />
            <Spacer />
        </HomeTemplate>
    );
};
