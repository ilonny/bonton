import React, { useEffect } from "react";
import {
    HomeTemplate,
    // CategoryTitle,
    Spacer,
    // HoverButton,
} from "../../features/common";
// import { Row } from "../../features/styled-components-layout";
import { CatalogList } from "../../features/catalog-list";
import { SubscribeForm } from "../../features/subscribe-form";
// import { Color } from "../../lib";
import { CatalogTypeSelect } from "../../features/catalog-type-select";
import { CatalogFilters } from "../../features/catalog-filters";
import { pageData } from "../home/data";
export const CatalogPage = (props) => {
    // console.log("props", props);
    useEffect(() => {
        // console.log("update effect", props.location.search);
    }, [props.location.search]);
    return (
        <HomeTemplate>
            <CatalogTypeSelect />
            <CatalogFilters />
            <CatalogList data={pageData.catalogList} />
            <Spacer />
            <SubscribeForm />
            <Spacer />
        </HomeTemplate>
    );
};
