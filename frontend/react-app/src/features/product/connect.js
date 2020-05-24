import { connect } from "react-redux";
import { ProductTemplate } from "./templates";
import { productReducer } from "./reducer";
export const Product = connect(
    (state) => ({
        product: state.product
    }),
    (dispatch) => ({
        getCurrentProduct: id => dispatch(productReducer.getProducts(id)),
    })
)(ProductTemplate);
