import React, { useEffect } from "react";
import { Row } from "../../styled-components-layout";
import { FilterSelect } from "../organisms/filter-select";
import { categoriesMock } from "./mock-data";
export const CatalogFiltersTemplate = (props) => {
    // console.log("CatalogFiltersTemplate props", props);
    const {
        setCategories,
        categories,
        toggleCategory,
        location: { search },
        syncCategoriesWithParams,
    } = props;
    // console.log("categories", categories);
    // console.log("search", search);
    useEffect(() => {
        setCategories(categoriesMock);
    }, [setCategories]);

    useEffect(() => {
        // console.log("update effect", props.location.search);
        // setCategories(categories);
        syncCategoriesWithParams();
    }, [search, syncCategoriesWithParams]);

    return (
        <div style={{ marginBottom: "30px" }}>
            <Row align="center" justify="space-between">
                <FilterSelect
                    title={"Категории"}
                    data={categories}
                    toggleCategory={toggleCategory}
                />
            </Row>
        </div>
    );
};
