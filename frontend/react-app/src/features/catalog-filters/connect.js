import { connect } from "react-redux";
import { CatalogFiltersTemplate, CatalogPaginationTemplate } from "./templates";
import { categoriesReducer } from "./reducer";
import {productReducer} from "../product";
export const CatalogFilters = connect(
    (state) => ({
        menuCategories: state.main.menuCategories,
        ...state.categories
    }),
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
        reset: () => dispatch(categoriesReducer.reset()),
        getProducts: (id) => dispatch(productReducer.getProducts(id)),
    })
)(CatalogFiltersTemplate);


export const CatalogPagination = connect(
    (state) => state.categories,
    (dispatch) => ({
        setPage: page => dispatch(categoriesReducer.setPagination(page))
    })
)(CatalogPaginationTemplate);
