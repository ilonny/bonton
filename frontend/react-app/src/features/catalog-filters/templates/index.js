import React, { useEffect } from "react";
import { Row } from "../../styled-components-layout";
import { FilterSelect } from "../organisms/filter-select";
import { categories } from "./mock-data";
export const CatalogFiltersTemplate = (props) => {
    console.log("CatalogFiltersTemplate props", props);
    const { setCategories } = props;
    useEffect(() => {
        setCategories(categories);
    }, [setCategories]);
    return (
        <div style={{ marginBottom: "30px" }}>
            <Row align="center" justify="space-between">
                <FilterSelect title={"Категории"} data={props.categories} />
            </Row>
        </div>
    );
};
