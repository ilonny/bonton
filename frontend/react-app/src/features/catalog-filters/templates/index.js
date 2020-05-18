import React, { useEffect } from "react";
import { Row } from "../../styled-components-layout";
import { FilterSelect } from "../organisms/filter-select";
import { categoriesMock, filtersMock } from "./mock-data";
export const CatalogFiltersTemplate = (props) => {
    // console.log("CatalogFiltersTemplate props", props);
    const {
        setCategories,
        setFilters,
        categories,
        filters,
        toggleCategory,
        toggleFilter,
        location: { search },
        syncCategoriesWithParams,
    } = props;
    // console.log("categories", categories);
    // console.log("search", search);
    useEffect(() => {
        setCategories(categoriesMock);
        setFilters(filtersMock);
    }, [setCategories, setFilters]);

    useEffect(() => {
        // console.log("update effect", props.location.search);
        // setCategories(categories);
        syncCategoriesWithParams();
    }, [search, syncCategoriesWithParams]);

    return (
        <div style={{ marginBottom: "30px" }}>
            <Row align="center" justify="space-between">
                <FilterSelect
                    type="categories"
                    title={"Категории"}
                    data={categories}
                    toggleCategory={toggleCategory}
                />
                <FilterSelect
                    type="filters"
                    title={"Фильтры"}
                    data={filters}
                    toggleFilter={toggleFilter}
                />
            </Row>
        </div>
    );
};
