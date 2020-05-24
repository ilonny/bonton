import { connect } from "react-redux";
import { CatalogListTemplate } from "./templates";
import { productReducer } from "../product";
export const CatalogList = connect(
    (state) => ({
        data: state.product.products
    }),
    (dispatch) => ({
        getProducts: () => dispatch(productReducer.getProducts()),
    })
)(CatalogListTemplate);
