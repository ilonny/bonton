import { connect } from "react-redux";
import { CatalogFiltersTemplate } from "./templates";
import { categoriesReducer } from "./reducer";
export const CatalogFilters = connect(
    (state) => state.categories,
    (dispatch) => ({
        setCategories: (params) =>
            dispatch(categoriesReducer.setCategories(params)),
        toggleCategory: (params) =>
            dispatch(categoriesReducer.toggleCategory(params)),
        syncCategoriesWithParams: () =>
            dispatch(categoriesReducer.syncCategoriesWithParams()),
        setFilters: (params) =>
            dispatch(categoriesReducer.setFilters(params)),
    })
)(CatalogFiltersTemplate);
