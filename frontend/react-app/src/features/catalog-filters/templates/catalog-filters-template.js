import React, { useEffect } from "react";
import { Row } from "../../styled-components-layout";
import { FilterSelect, Sorting, ResetButton } from "../organisms";
import { filtersMock } from "./mock-data";
import { getUrlParamsArray } from "../lib"

function flatten(arr) {
    return arr ? arr.reduce((result, item) => [
        ...result,
        { name: item.name, id: item.id, type: item.type, code: item.id, parent_id: item.parent_id },
        ...flatten(item.children)
    ], []) : [];
}

export const CatalogFiltersTemplate = (props) => {
    // console.log("CatalogFiltersTemplate props", props);
    const {
        setCategories,
        setFilters,
        menuCategories,
        categories,
        filters,
        sort_price,
        toggleCategory,
        toggleFilter,
        location: { search },
        syncCategoriesWithParams,
        setSorting,
        reset
    } = props;
    // console.log("categories", categories);
    // console.log("search", search);
    useEffect(() => {
        const urlType = getUrlParamsArray('type')[0] || 'men';
        let categories = [];
        if (menuCategories.tree) {
            if (urlType === 'men') {
                categories = menuCategories.tree[0]
            } else {
                categories = menuCategories.tree[1]
            }
            if (categories.id) {
                categories = flatten([categories]).filter(el => el.parent_id !== null);
            }
            setCategories(categories);
            syncCategoriesWithParams();
        }
        setFilters(filtersMock);
    }, [setCategories, setFilters, menuCategories, syncCategoriesWithParams, search]);

    useEffect(() => {
        // console.log("update effect", props.location.search);
        // setCategories(categories);
        syncCategoriesWithParams();
    }, [search, syncCategoriesWithParams]);
    // console.log('filters props', props);
    // console.log('urlType', urlType);
    // console.log('categories', categories);
    return (
        <div style={{ marginBottom: "30px" }}>
            <Row align="flex-end" justify="space-between" mobile_wrap="true">
                <FilterSelect
                    type="categories"
                    title={"Категории"}
                    data={categories || []}
                    toggleCategory={toggleCategory}
                />
                <FilterSelect
                    type="filters"
                    title={"Фильтры"}
                    data={filters}
                    toggleFilter={toggleFilter}
                />
                <Sorting code="sort_price" title="Цена" value={sort_price} setSorting={setSorting} />
                <ResetButton reset={reset} />
            </Row>
        </div>
    );
};
