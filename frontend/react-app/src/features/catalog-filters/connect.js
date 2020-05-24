import { connect } from "react-redux";
import { CatalogFiltersTemplate, CatalogPaginationTemplate } from "./templates";
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
        setFilters: (params) => dispatch(categoriesReducer.setFilters(params)),
        toggleFilter: (params) => dispatch(categoriesReducer.toggleFilter(params)),
        setSorting: (params) => dispatch(categoriesReducer.setSorting(params)),
        reset: () => dispatch(categoriesReducer.reset())
    })
)(CatalogFiltersTemplate);


export const CatalogPagination = connect(
    (state) => state.categories,
    (dispatch) => ({
        test: () => console.log('test')
    })
)(CatalogPaginationTemplate);
