import React, { useEffect } from "react";
import { Row } from "../../styled-components-layout";
import { FilterSelect, Sorting, ResetButton} from "../organisms";
import { categoriesMock, filtersMock } from "./mock-data";
export const CatalogFiltersTemplate = (props) => {
    // console.log("CatalogFiltersTemplate props", props);
    const {
        setCategories,
        setFilters,
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
            <Row align="flex-end" justify="space-between">
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
                <Sorting code="sort_price" title="Цена" value={sort_price} setSorting={setSorting} />
                <ResetButton reset={reset}/>
            </Row>
        </div>
    );
};
